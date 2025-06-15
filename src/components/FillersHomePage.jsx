import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/fillersHomePage.css";

const FillersHomePage = () => {
    return (
        <div className="fillers-container">
            <div className="filler-item filler-item-1">
                <span className="span1-filler">Rent-a-Nachhaltigkeit</span>
                <span className="span2-filler">Der WMK Möbelverleih</span>
                <Link to="/verleih"> {/* Add the route path */}
                    <button className="more-button btnfillers">MEHR ERFAHREN</button>
                </Link>
            </div>
            <div className="filler-item filler-item-2">
                <span className="span1-filler">Aus Friedrichshain in die ganze Welt</span>
                <span className="span2-filler">Aus Berlin. Für Berlin. Danke Berlin.</span>
                <Link to="/vintage-mega-store"> {/* Add the route path */}
                    <button className="more-button btnfillers">Unsere Standorte</button>
                </Link>
            </div>
        </div>
    );
};

export default FillersHomePage;