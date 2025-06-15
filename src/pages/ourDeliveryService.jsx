import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";

import "./theBlackDogpage.css";
import InfoBottomBar from "../components/infoBottomBar";
import NewsletterSubscription from "../components/NewsletterSubscription";

const OurDeliveryService = () => {
  const slidingText =
    "Have you discovered our new SALE page yet? Go there! | Check out our latest collections! | Special discounts available!";

  // Array of gallery images
  const galleryImages = [
    "d4ba8bac-2a0a-4a53-9bf5-1bef2e96da1d.webp",
    "/2.webp",
   
  ];


  return (
    <div>

      {/* Main Content */}
      <div className="content">
        {/* Image Section */}
        <div className="image-container">
          <img src="/IMG_9840.webp" alt="Team fist Bump" />
        </div>

        {/* Text Section */}
        <div className="text-container">
        <h2>Our delivery service</h2>
<h3>+++ 2014-2024 +++ 10 years of delivery experience +++</h3>

<span>Munich, Paris, Lisbon and even Beijing, our furniture has traveled a lot so far.</span>
<br/>
<br/>

And this only works with great attention to detail, including when shipping.
<br/>
<br/>

After all, our beautiful furniture should arrive exactly as it left us.
<br/>
<br/>

For deliveries in and around Berlin:
<br/>
<br/>

We handle deliveries within Berlin, to Potsdam and the surrounding area ourselves. These are usually carried out at short notice, are TO THE APARTMENT and cost PER DELIVERY depending on the district as follows:
<br/>
<br/>

25€ Friedrichshain
<br/>
<br/>

35€ Lichtenberg, Prenzlauer Berg, Neukölln, Kreuzberg, Alt-Treptow
<br/>
<br/>

45€ Other districts of Berlin
<br/>
<br/>

60€ Potsdam
<br/>
<br/>

70€ Berlin area
<br/>
<br/>

Wardrobes and bulky furniture, will be delivered in parts wherever possible to protect the health of our employees and to prevent damage to furniture and stairwells.
<br/>
<br/>

<h3>An on-site assembly service is optional and costs €35 per piece of furniture.</h3>
<br/>
<br/>

Some Boatwood furniture must be delivered by 4 or 6 people due to weight and/or size.
<br/>
<br/>

In this case, we charge double delivery costs, regardless of how many pieces of furniture are involved.
<br/>
<br/>

<h3>The following applies to deliveries within Germany and Europe:</h3>
<br/>
<br/>

Furniture shipping within Germany and Europe is carried out by freight forwarders.
<br/>
<br/>

You can determine the shipping costs for each piece of furniture during checkout or request them.
<br/>
<br/>

We pass the shipping costs on to our customers 1:1. And if you order more than one piece of furniture, you benefit from generous discounts, which are calculated automatically.
<br/>
<br/>

Please note that shipping is done on pallets and only to the curb. Unfortunately, it is not possible to take pallets and packaging material back with you, please dispose of them in an environmentally friendly manner. A pallet can also be reused, or just give them away.
<br/>
<br/>

We or the shipping company commissioned to deliver the goods are solely liable for any damage that may occur during delivery. You as the customer therefore bear no risk at all.
<br/>
<br/>

Worldwide furniture shipping is also possible on request.
<br/>
<br/>

If you have any questions, please send us an email to <a href="mailto:info@wmk.berlin">info@wmk.berlin</a>, or call us at: <a href="tel:0304790682">030 479 06 82</a>
<br/>
<br/>

And sit back, we'll do it!
<br/>
<br/>

Photo left: Our delivery in Spandau, 2016
<br/>
<br/>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery gallery1">
        {galleryImages.map((src, index) => (
          <img key={index} src={src} alt={`Gallery item ${index + 1}`} />
        ))}
      </div>


      {/* Full-Width Image Section */}
      <div className="full-width-image">
        <img
          src="//wmk.berlin/cdn/shop/files/steep-stairs-on-tower.jpg?v=1700780043&width=640"
          alt="Steep Stairs on Tower"
        />
        <div className="full-width-text">
          <h3>Long story short:</h3>
          <p>From a Friedrichshain cellar to the German Bundestag</p>
         
        </div>
      </div>

      {/* Info Section */}
      <InfoBottomBar/>

        <NewsletterSubscription/>
    </div>
  );
};

export default OurDeliveryService;


//done