import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import MiddleBanner from "../components/MiddleBanner";
import Bestproducts from "../components/BestProducts";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InfoBottomBar from "../components/infoBottomBar";
import FillersHomePage from "../components/FillersHomePage";
import FillersHomePag2 from "../components/FillersHomePage2";
import SalesPageHome from "../components/salesPage";
import NewHitsPage from "../components/newHits";
import StairImage from "../components/StairImage";
import FillersHomePage0 from "../components/FillersHomePage0";
import Reviews from "../components/Reviews";
import axios from "axios";
import FillersHomePage01 from "./FillersHomePage01";


function HomePage() {
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
    <div>
      <Banner />
      <MiddleBanner/>
      <NewHitsPage/>
      <FillersHomePage01/>
      {/* <Categories/> */}
      <SalesPageHome/>
      <FillersHomePage/>
      {/* Highlights */}
      <Bestproducts />
      <FillersHomePage0/>
      <StairImage/>
      <InfoBottomBar/>
      {/* <FillersHomePag2/> */}
      <Reviews/>
      <NewsletterSubscription/>
    </div>
  );
}

export default HomePage;
