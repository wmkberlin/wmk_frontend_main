import React from "react";
import { Truck, Store, ShoppingCart } from "lucide-react";

import "../pages/ourTeamPage.css";
import InfoBottomBar from "./infoBottomBar";
import NewsletterSubscription from "./NewsletterSubscription";

const Firmenname = () => {
    const slidingText =
        "Have you discovered our new SALE page yet? Go there! | Check out our latest collections! | Special discounts available!";



    return (
        <div>

            {/* Main Content */}
            <div className="content">
                {/* Image Section */}
                <div className="image-container">
                    <img src="/logo_firmenname.webp" alt="Team fist Bump" />
                </div>

                {/* Text Section */}
                <div className="text-container">
                    <h2>Wollen Möbel Kaufen?!</h2>
                    <p>Wir werden oft wegen unserem Firmennamen angesprochen. Dieser ist auch nicht ganz üblich. Aber die meisten unserer Kunden verstehen den kleinen Scherz dahinter, wir sitzen schließlich ja auch in Berlin-Friedrichshain, hier ist man ja auch besonders locker.</p>

                    <p>Je bekannter wir aber werden, desto mehr werden wir auch für unseren Namen angefeindet. Von Rechts wie von Links.</p>

                    <p>So werden wir manchmal in einer Woche als schei* Ausländer und schei* Rassisten beschimpft.</p>

                    <p> Zeiten ändern sich, und paradoxerweise werden sie rauer und empfindlicher zugleich. Und unser Name stammt aus einer anderen Zeit.</p>

                    <p> Damals wollten wir auch nur einen kleinen Kiez Möbelladen eröffnen.</p>

                    <p>Ja, unser Team ist sehr international. Und das ist auch gut so.</p>

                    <p>Und wir haben damals mit dem Namen uns selbst auf die Schippe genommen. Es lag uns nichts ferner als andere die nicht so gut Deutsch sprechen zu mobben.</p>

                    <p>Weil auch nach fast 30 Jahren in diesem wunderbarem Land lernen auch wir immer noch diese sehr reiche Sprache</p>
                    
                </div>
            </div>



            <InfoBottomBar />
            <NewsletterSubscription />
        </div>
    );
};

export default Firmenname;

// done
