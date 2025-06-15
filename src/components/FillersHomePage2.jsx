import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/fillersHomePage.css";

const FillersHomePag2 = () => {
    return (
        <div className="fillers-container">
            <div className="filler-item filler-item-11">
                <span className="span1-filler">That's how it all started</span>
                <span className="span2-filler">Wollen Möbel Kaufen?! Story                </span>
                <Link to="/about-us"> {/* Add the route path */}
                    <button className="more-button btnfillers">Get to know us</button>
                </Link>
            </div>
            <div className="filler-item filler-item-22">
            <span className="span1-filler">Meet our Team</span>
            <span className="span2-filler">Get to know the passionate individuals behind our success</span>
                <Link to="/our-team"> {/* Add the route path */}
                    <button className="more-button btnfillers">MEHR ERFAHREN</button>
                </Link>
            </div>
        </div>
    );
};

export default FillersHomePag2;