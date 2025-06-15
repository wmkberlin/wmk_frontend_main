import React, { useState, useEffect, useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "../styles/ProductDetail.css";
import Bestproducts from "./BestProducts";
import { useShoppingCart } from "use-shopping-cart";
import { useWishlist } from "../context/WishListContext";
import NewsletterSubscription from "./NewsletterSubscription";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import RentPopup from "./rentPopup";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductDetailPage({ toggleCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageContainerRef = useRef(null);
  const detailSection = useRef(null);
  const imgSection = useRef(null);
  const [detailHeight, setDetailHeight] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [isServiceChecked, setIsServiceChecked] = useState(false);
  const [servicePrice, setServicePrice] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRentPopup, setShowRentPopup] = useState(false); // State to control popup visibility
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVariantsAvailable, setIsVariantsAvailable] = useState(false);
  const [isDiscountApplicable, setIsDiscountApplicable] = useState(false);

  const changeAssemblyRequired = () => {
    setIsServiceChecked(prevState => {
      const newState = !prevState;
      setServicePrice(newState ? 35 : 0);
      return newState;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (detailSection.current && imgSection.current) {
      setDetailHeight(detailSection.current.offsetHeight);
      setImgHeight(imgSection.current.offsetHeight);
    }
  }, [product]);

  const { cartDetails, addItem } = useShoppingCart(); // Access cart details from useShoppingCart
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Fetch product data from API
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://wmk-backend.onrender.com/api/user_product/product/${id}`
        );
        const data = await response.json();

        if (response.ok) {
          setProduct(data);
          console.log(data, "dataaaa");
          setSelectedImage(data.productImages[0]);
          setIsVariantsAvailable(data.isVariantsAvailable || false);
          const places = Array.isArray(data?.productPlace) ? data.productPlace : [];
          console.log(places.includes('sales'));
          
          setIsDiscountApplicable(places.includes('sales'));        
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.log(err);
        setError("Something went wrong while fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = async (rentFlag = false, rentOption = null) => {
    if (product.stockAmt <= 0) {
      toast.error("Product is out of stock!", { position: "top-center" });
      return;
    }

    // Check if the product is already in the cart
    const existingCartItem = cartDetails[product._id];
    const existingQuantity = existingCartItem ? existingCartItem.quantity : 0;

    // Calculate the total quantity after adding the new item
    const newQuantity = existingQuantity + 1; // Assuming you're adding 1 item at a time

    // Check if the new quantity exceeds the available stock
    if (newQuantity > product.stockAmt) {
      toast.error(`Only ${product.stockAmt} items available in stock!`, {
        position: "top-center",
      });
      return;
    }

    // Calculate price based on rentFlag and rentOption
    let finalPrice = product.pricing.price; // Default to discountPrice

    if (rentFlag && rentOption) {
      switch (rentOption) {
        case "1day":
          finalPrice = product.pricing.price * 0.1;
          break;
        case "1week":
          finalPrice = product.pricing.price * 0.2;
          break;
        case "1month":
          finalPrice = product.pricing.price * 0.3;
          break;
        case "1year":
          finalPrice = product.pricing.price * 0.4;
          break;
        case "2years":
          finalPrice = product.pricing.price * 0.5;
          break;
        default:
          finalPrice = product.pricing.price;
          break;
      }
    }

    // if (product.shopType == "vintage") finalPrice += finalPrice * 0.19



    // Prepare the cart item
    const cartItem = {
      id: product._id,
      title: product.title,
      price: finalPrice + servicePrice,
      currency: product.pricing.currency,
      description: product.descriptions.join("\n"),
      image: product.productImages[0],
      isRent: rentFlag,
      rentOption: rentFlag ? rentOption : null,
      stockAmt: product.stockAmt,
      shopType: product.shopType
    };

    // Add the item to the cart
    addItem(cartItem);
    toast.success("Product added to cart!", { position: "top-center" });
    setTimeout(() => {
      toggleCart();
    }, 500);
  };



  // Function to handle Wishlist
  const handleWishlist = async () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
      // API call to remove from backend
      // try {
      //   const response = await fetch(`https://wmk-backend.onrender.com/api/wishlist/remove/${id}`, {
      //     method: "DELETE",
      //   });

      //   if (!response.ok) {
      //     throw new Error("Failed to remove from wishlist");
      //   }

      //   console.log("Product removed from wishlist successfully");
      // } catch (error) {
      //   console.error("Error removing from wishlist:", error);
      // }
    } else {
      const wishlistData = {
        productId: id,
        title: product.title,
        price: product.pricing.price,
        image: product.productImages[0],
      };

      addToWishlist(wishlistData);
      toast.success("Added to wishlist! Buy later", {
        position: "top-center",
        pauseOnFocusLoss: false,
      });
      // API call to add to wishlist
      // try {
      //   const response = await fetch("https://wmk-backend.onrender.com/api/wishlist/add", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(wishlistData),
      //   });

      //   if (!response.ok) {
      //     throw new Error("Failed to add product to wishlist");
      //   }

      //   console.log("Product added to wishlist successfully");
      // } catch (error) {
      //   console.error("Error adding to wishlist:", error);
      // }
    }
  };

  // Handle Rent Button Click
  const handleRentClick = () => {
    setShowRentPopup(true);
  };

  // Handle Rent Option Selection
  const handleRentOptionSelect = (option) => {
    handleAddToCart(true, option); // Call handleAddToCart with rentFlag=true and the selected option
  };

  const selectVariant = (imageUrl, index) => {
    const container = document.querySelector('.image-scroll-container');
    document.querySelector(`.imgListVariant`)?.remove();
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');

    const img = document.createElement('img');
    img.classList.add('imgList');
    img.classList.add('imgListVariant');

    img.src = imageUrl;
    img.alt = `Produkt ${index + 1}`;

    imageItem.appendChild(img);
    container?.prepend(imageItem);
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
      <div id="container-productDetail" className="container-productDetail">
        {/* Image Thumbnails and Main Image Section */}
        {isMobile && (
          <div className="mobile-product-header">
            <h1>{product.title}</h1>
            <div className="price-btn-group1">
              {product?.pricing?.comparePrice + servicePrice || product?.pricing?.price + servicePrice},00€
            </div>
            {product.shopType && <span>*Inkl. 19% MwSt</span>}
          </div>
        )}

        {/* Image Thumbnails and Main Image Section */}
        {isMobile ? (
          // Mobile Slider using Swiper
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {product.productImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="image-item">
                  <Zoom>
                    <img className="imgList" src={image} alt={`Produkt ${index + 1}`} />
                  </Zoom>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Desktop Scrollable Container
          <div ref={imgSection} className="image-scroll-container scroll_imgs">
            {product.productImages.map((image, index) => (
              <div key={index} className="image-item">
                <Zoom>
                  <img
                    className="imgList"
                    src={image}
                    alt={`Product ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                </Zoom>
              </div>
            ))}
            {isVariantsAvailable && product.variants.map((variant, index) => (
              variant.variantImages && variant.variantImages[0] && (
                <div key={`variant-${index}`} className="image-item">
                  <Zoom>
                    <img
                      className="imgList"
                      src={variant.variantImages[0]}
                      alt={`Product variant ${index + 1}`}
                    />
                  </Zoom>
                </div>
              )
            ))}
          </div>
        )}

        {/* Product Details Section */}
        <div
          style={{ top: `calc(-${detailHeight}px + 100vh )` }}
          ref={detailSection}
          className="details-section"
        >
          <div className="details-scrollable">
            {!isMobile && (
              <>
                <h1>{product.title}</h1>
                <div className="price-btn-group1">
                  {product?.pricing && (
                    <>
                      {isDiscountApplicable ? (
                        <span>{(product.pricing.price + servicePrice).toFixed(2)}€</span>
                      ) : (
                        <span>{(product.pricing.comparePrice + servicePrice).toFixed(2)}€</span>
                      )}
                    </>
                  )}
                </div>
                {product.shopType && <span>*Inkl. 19% MwSt</span>}
              </>
            )}
            {product?.assemblyService && (
              <div>
                <div class="service-container">
                  <span class="service-title">Aufbauservice</span>

                  <label for="serviceCheckbox" class="service-label">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      checked={isServiceChecked}
                      onChange={changeAssemblyRequired}
                    />

                    <span>
                      <small>
                        {" "}
                        Aufbauservice (nur in Berlin und Potsdam verfügbar) +
                        €35.00
                      </small>
                    </span>
                  </label>
                </div>
              </div>
            )}
            {isVariantsAvailable && (
              <>
                <span>Choose Variants</span>
                <div className="parentDivVariants">
                  <div key={0} className="variant-section" onClick={() => selectVariant(product.productImages[0], 0)}>
                    <span>1</span> {/* Display "Variant 1", "Variant 2", etc. */}
                  </div>
                  {product.variants.map((variant, index) => (
                    <div key={index + 1} className={`variant-section`} onClick={() => selectVariant(variant.variantImages[0], index)}>
                      <span>{index + 2}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* <div className="grid">
              <span>WMK Score</span>
              <span className="flex items-center gap-2">
                <img
                  src="/vmk/ear.jpg"
                  alt="Ear Rating"
                  width="20"
                  height="20"
                />
                Technischer Zustand: {product.earRating}
              </span>
              <span className="flex items-center gap-2">
                <img
                  src="/vmk/eye.png"
                  alt="Eye Rating"
                  width="20"
                  height="20"
                />
                Optischer Zustand: {product.eyeRating}
              </span>
              <span className="flex items-center gap-2">
                <img
                  src="/vmk/nose.jpg"
                  alt="Nose Rating"
                  width="20"
                  height="20"
                />
                Geruchsneutralität: {product.noseRating}
              </span>
            </div> */}
          </div>

          <div className="button-group1">
            <div className="btn-group1-sub">
              {product.stockAmt > 0 ? (
                <>
                  <button onClick={() => handleAddToCart(false)}>Kaufen</button>
                  <button onClick={handleRentClick}>Mieten</button>
                </>
              ) : (
                <p className="out-of-stock">Ausverkauft (Out of Stock)</p>
              )}
              <button onClick={handleWishlist}>Wunschliste</button>
            </div>
          </div>
          <br /><br />

          <div>{product.subtopic}</div>
          <br />
          <div>{product.similarToTitle}</div>
          <span className="description" dangerouslySetInnerHTML={{ __html: product.zustandText }} />
          <span className="description" dangerouslySetInnerHTML={{ __html: product.descriptions.join("<br />") }} />
          <span className="description" dangerouslySetInnerHTML={{ __html: product.storyShop }} />
          <span className="description" dangerouslySetInnerHTML={{ __html: product.shopInfo }} />
          <span className="description" dangerouslySetInnerHTML={{ __html: product.aboutUs }} />


        </div>


      </div>

      {/* Best Products and Newsletter Subscription */}
      <Bestproducts />
      <NewsletterSubscription />

      {/* Rent Popup */}
      {showRentPopup && (
        <RentPopup
          price={product.pricing.price}
          onConfirm={handleRentOptionSelect} // Pass the handleRentOptionSelect function
          onClose={() => setShowRentPopup(false)}
          productType={product.shopType}
        />
      )}
    </>
  );
}

export default ProductDetailPage;
