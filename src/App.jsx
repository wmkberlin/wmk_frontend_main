import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";
import { WishlistProvider } from "./context/WishListContext";
// Components
import Navbar from "./components/Navbar";
import "./global.css"
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FloatingWhatsApp from "./components/WhatsappIcon";
import CategoriesDetail from "./components/CategoryDetailPage";
import ProductDetailPage from "./components/ProductDetailPage";
import CartSidebar from "./components/CartSidebar";
import WishlistSidebar from "./components/WishList";
import ViewAllCategories from "./components/AllCategories.jsx";
import NewsletterSubscription from "./components/NewsletterSubscription";
import LoginSignupPage from "./components/LoginSignupform";
import ProductListPage from "./components/ProductListPage";
import ScrollToTop from "./scrollToTop";
import CartPaymentPage from "./components/CartPaymentPage";
import { ToastContainer } from "react-toastify";
import OrderSuccess from "./components/orderSuccess";
import SalesPage from "./pages/ContactUs.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import OurTeam from "./pages/OurTeampage.jsx";
import BlackDog from "./pages/TheBlackDogPage.jsx";
import OrderReview from "./components/reviewOrder";
import SuccessPage from "./components/PaymentSuccess.jsx";
import CancelPage from "./components/CancelPaymentPage.jsx";
import RentPage from "./pages/Rental.jsx";
import SalesPageRoute from "./components/SalesListPage.jsx";
import NewHitsPage from "./components/NewHitsPage.jsx";
import ThinkGreenPage from "./pages/ThinkGreenPage.jsx";
import AnkaufPage from "./pages/AnkaufPage.jsx";
import VerleihPage from "./pages/VerleihPage.jsx";
import Impressum_footer from "./pages/Impressum_footer.jsx";
import DataProtectionFooterPage from "./pages/DataProtectionFooterPage.jsx";
import WithdrawalFooterPage from "./pages/WithdrawalFooterPage.jsx";
import TermsFooterPage from "./pages/TermsFooterPage.jsx";
import OurDeliveryService from "./pages/ourDeliveryService.jsx";
import OurPaymentService from "./pages/paymentService.jsx";
import ParentCategoriesDetail from "./components/parentCategory.jsx";
import MegaStorePage from "./pages/MegaStore.jsx";
import axios from "axios";
import SuccessPageStripe from "./styles/SuccessPage.jsx";
import HighlightPage from "./components/HighlightPage.jsx";
import Firmenname from "./components/firmenname.jsx";
import MobelHerPage from "./components/mobelHer.jsx";
import WMKforUkraine from "./components/ukraine.jsx";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);

  const toggleCart = () => setCartOpen(!isCartOpen);
  const toggleWishlist = () => setWishlistOpen(!isWishlistOpen);
  const slidingText =
    "Haben Sie schon unsere neue SALE-Seite entdeckt? Dann gehen Sie hin! | Sehen Sie sich unsere neuesten Kollektionen an! | Sonderrabatte verfügbar!";


    const [formData, setFormData] = useState({
      welcomeText: '',
      sliderText: '',
      shopTiming: '',
  });
  
  useEffect(() => {
      fetchDefaults();
  }, []);
  
  const fetchDefaults = async () => {
      try {
          const response = await axios.get(`https://wmk-backend.onrender.com/api/admin_product/dashboardTexts`);
          setFormData(response.data || {});
          console.log(formData);
      } catch (error) {
          console.error('Error fetching defaults:', error);
      }
  };
  return (
    <Router>
      <ScrollToTop />
      <CartProvider mode="checkout-session" currency="EUR">
        <WishlistProvider>
          <div className="App">
            <Navbar toggleCart={toggleCart} toggleWishlist={toggleWishlist} welcomeText={formData.welcomeText}/>
            {/* Sliding Bar */}
            <div className="sliding-bar">
              <div className="sliding-content" dangerouslySetInnerHTML={{ __html: formData.sliderText }}/>
            </div>

            {/* Important Notice */}
            <div className="important-notice" dangerouslySetInnerHTML={{ __html: formData.shopTiming }}/>
            <div className="midPartApp">
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/category/:id" element={<CategoriesDetail />} />
              <Route path="/parent-category/:id" element={<ParentCategoriesDetail />} />
              <Route path="/categories/:type" element={<ViewAllCategories />} />
              <Route path="/product/:id" element={<ProductDetailPage toggleCart={toggleCart}/>} />
              <Route path="/shop/:type" element={<ProductListPage />} />
              <Route path="/login" element={<LoginSignupPage />} />
              <Route path="/checkout" element={<CartPaymentPage />} />
              <Route path="/cartpayment" element={<CartPaymentPage />} />
              <Route path="/contact-us" element={<SalesPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/order-review" element={<OrderReview />} />
              <Route path="/order-success/:orderId" element={<OrderSuccess />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/melem" element={<BlackDog />} />
              <Route path="/paypal-success" element={<SuccessPage />} />
              <Route path='/success' element={<SuccessPageStripe/>}  />
              <Route path="/cancel" element={<CancelPage />} />
              <Route path="/rent-a-sustainability" element={<RentPage />} />
              <Route path="/sales" element={<SalesPageRoute />} />
              <Route path="/newhits" element={<NewHitsPage />} />
              <Route path="/highlights" element={<HighlightPage/>} />
              <Route path="/thinkGreen" element={<ThinkGreenPage/>} />
              <Route path="/ankauf" element={<AnkaufPage/>} />
              <Route path="/verleih" element={<VerleihPage/>} />
              <Route path="/impressum" element={<Impressum_footer/>} />
              <Route path="/data-protection" element={<DataProtectionFooterPage/>} />
              <Route path="/withdrawal" element={<WithdrawalFooterPage/>} />
              <Route path="/terms" element={<TermsFooterPage/>} />
              <Route path="/versand" element={<OurDeliveryService/>}/>
              <Route path="/ratenzahlung-bei-wmk" element={<OurPaymentService/>}/>
              <Route path="/vintage-mega-store" element={<MegaStorePage/>}/>
              <Route path="/firmenname" element={<Firmenname/>}/>
              <Route path="/wo-kommen-unsere-mobel-her" element={<MobelHerPage/>} />
              <Route path="/wmk-for-ukraine" element={<WMKforUkraine/>}/>
            </Routes>
            </div>
            <Footer />
            <FloatingWhatsApp />
            <CartSidebar isOpen={isCartOpen} toggleSidebar={toggleCart} />
            <WishlistSidebar
              isOpen={isWishlistOpen}
              toggleSidebar={toggleWishlist}
            />
          </div>
        </WishlistProvider>
      </CartProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;
