import React, { useState, useEffect } from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "../pages/ourTeamPage.css";
import InfoBottomBar from "./infoBottomBar";
import NewsletterSubscription from "./NewsletterSubscription";

const WMKforUkraine = () => {
    const slidingText =
        "Have you discovered our new SALE page yet? Go there! | Check out our latest collections! | Special discounts available!";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API
    useEffect(() => {
        const fetchBestProducts = async () => {
            try {
                const response = await fetch(`https://wmk-backend.onrender.com/api/user_product/categories/6801f81ec07426c1d0a606ac/products`);
                const data = await response.json();
        
                if (response.ok) {
                  console.log(data.products);
                  setData(data.products)
                } else {
                    setError(data.message || "Failed to fetch data");
                }
            } catch (err) {
                setError("Something went wrong!");
            } finally {
                setLoading(false);
            }
        };

        fetchBestProducts();
    }, []);

    if (loading) return <div className="loading-text">Loading...</div>;
    if (error) return <div className="error-text">{error}</div>;
    const visibleProducts = data;


    return (
        <div>

            {/* Main Content */}
            <div className="content ukraineStartContent" style={{ display: 'flex', width: '100%' }}>
                {/* Image Section */}
                <div className="image-container" style={{ flex: 1 }}>
                    <img src="/ukraine.webp" alt="Team fist Bump" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
                {/* Text Section */}
                <div className="text-container ukraineText" style={{ flex: 1, padding: '20px' }}>
                    <h2>Unsere Spendenaktion</h2>
                    <p>Die Menschen in der Ukraine brauchen<br />
                        unsere Hilfe.</p>
                    <p>Wenn du eines der hier angebotenen
                        Möbel kaufst, diese sind auch in unserem Vintage Mega Store ausgestellt, werden wir den kompletten Verkaufserlös an:</p>
                    <p><strong>Die Ärzte ohne Grenzen e.V.</strong>, mit Schwerpunkt auf deren humanitären Einsatz in der Ukraine, spenden.</p>
                    <p> Diese seriöse und mit Friedensnobelpreis ausgezeichnete internationale Hilfsorganisation kümmert sich direkt vor Ort mit Medikamenten und mobilen Teams um die medizinische Versorgung der von Krieg betroffenen Menschen. Weitere Informationen über Die Ärzte ohne Grenzen und deren Einsatz in der Ukraine findest du hier:</p>
                    <p> Ärzte ohne Grenzen / Ukraine.</p>
                    <p>Um die vollständige Transparenz zu</p>
                    <p>gewehrleisten, werden wir nach jedem Kauf einen Spendennachweis mit dem Hinweis auf den jeweiligen Kauf, hier veröffentlichen und in unseren Ukraine Raum aushängen.</p>
                    <p>Danke für deine Unterstützung, </p>
                    <p>dein WMK Team!</p>
                </div>
            </div>
            <div className="bestproduct-container">
                <div className="product-grid">
                    {/* First box: Sales Text */}
                    <div className="sales-text-box">
                        <Link to="sales">
                            <h1 className="bestproduct-title">Unsere aktuellen Spenden
                            </h1>
                            {/* <p className="bestproduct-subtitle">Unsere aktuellen Spenden
                      </p> */}
                        </Link>
                    </div>

                    {/* Display Products */}
                    {visibleProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            image={product.productImages?.[0] || "https://via.placeholder.com/300x200"}
                            title={product.title}
                            price={product?.pricing?.comparePrice ? `${product?.pricing?.comparePrice}` : `${product?.pricing?.price}`}
                            discount={product?.pricing?.price ? `${product?.pricing?.price}` : "Kein Rabatt"}
                            id={product?.productId || product._id}
                            chargeTax={product.chargeTax}
                            isDiscountApplicable={true}
                            shopType={product.shopType}
                            stockAmt={product.stockAmt}
                            isAssemblyService={product.assemblyService}
                        />
                    ))}
                </div>
            </div>
            <div className="content unkrainMidContent" style={{ display: 'flex', width: '100%' }}>
                <div className="image-container" style={{ flex: 1 }}>
                    <img src="/ukraine1.webp" alt="Team fist Bump" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
                <div className="text-container" style={{ flex: 1, padding: '20px' }}>
                    <p>Der neue "Spendenraum" mit den ersten Möbel in unserem Vintage Mega Store in der Rigaer Passage. Die Möbel spenden wir, und diese werden, sobald verkauft, immer durch Neue ersetzt.</p>
                    <h2>Flagge zeigen!</h2>
                </div>
            </div>

            <div className="content unkrainMidContent" style={{ display: 'flex', width: '100%' }}>
                <div className="image-container" style={{ flex: 1 }}>
                    <img src="/ukraine2.webp" alt="Team fist Bump" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className="text-container" style={{ flex: 1, padding: '20px' }}>
                    <p>Unser Maler Jürgen hat nicht nur kostenlos gemalert, auch die Farben waren eine Spende von ihm.

                    </p>
                    <h2>Danke dir lieber Jürgen!
                    </h2>
                </div>
            </div>
            <div className="content unkrainMidContent" style={{ display: 'flex', width: '100%' }}>
                <div className="text-container" style={{ flex: 1, padding: '20px' }}>
                    <p>Unsere 1. Spende, der coole Vitra Stuhl, geht nach Würzburg, in das schöne The Barthels Boutique Hotel. Und Das können wir wärmstens empfehlen. Dort stehen bereits einige Möbel von uns, und der Betreiber Ralf Barthelmes hat ein Auge für Design und das Herz am rechten Fleck!</p>
                    <h2>Danke lieber Ralf!</h2>
                    <a href="https://thebarthels.de/" target="_blank" rel="noopener noreferrer">
                    <button className="more-button btnfillers btn-ukrine">
                        The Barthels Boutique Hotel
                    </button>
                </a>
                </div>
                <div className="image-container" style={{ flex: 1 }}>
                    <img
                        src="/ukraine3.webp"
                        alt="Team fist Bump"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <InfoBottomBar />
            <NewsletterSubscription />
        </div>
    );
};

export default WMKforUkraine;

// done
