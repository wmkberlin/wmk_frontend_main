import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";

import "../pages/ourTeamPage.css";
import InfoBottomBar from "./infoBottomBar";
import NewsletterSubscription from "./NewsletterSubscription";

const MobelHerPage = () => {
    const slidingText =
        "Have you discovered our new SALE page yet? Go there! | Check out our latest collections! | Special discounts available!";



    return (
        <div>

            {/* Main Content */}
            <div className="content">
                {/* Image Section */}
                <div className="image-container">
                    <img src="/Baum_mit_Wasserzeichen.webp" alt="Team fist Bump" />
                </div>

                {/* Text Section */}
                <div className="text-container">
                    <h1>Möbel wachsen nicht auf den Bäumen.</h1>
                    <p>Viele unserer Möbel kommen direkt von privaten Anbietern die unsere Fairness bei den Ankaufpreisen, unsere Verlässlichkeit bei Terminabsprachen und unser Versprechen ihre schönen Möbel aufzuarbeiten und so auch für spätere Generationen zu erhalten, zu schätzen wissen.

</p>

                    <p>Um euch jedoch ständig mehr als 1000 sowie täglich neue Möbelstücke und vor allem um euch eine große Palette an Stilrichtungen anbieten zu können, uns aber trotzdem auf die Qualität und den Service fokussieren zu können, überlassen wir das Jagen und Sammeln meist unseren Partnern. 

</p>

                    <p>Das sind duzende Händler, aus In- und Ausland, die uns fast täglich mit neuer Ware beliefern. Und auch hier kommt es auf Fairness und Verlässlichkeit an. So arbeiten viele von den schon fast ein Jahrzehnt mit uns zusammen. 

</p>

                    <p> Leben, und leben lassen, wie man das so schön sagt. 

</p>

                    
                </div>
            </div>



            <InfoBottomBar />
            <NewsletterSubscription />
        </div>
    );
};

export default MobelHerPage;

// done
