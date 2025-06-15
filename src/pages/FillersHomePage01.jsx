import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/fillersHomePage0.css";

const FillersHomePage01 = () => {
    return (
        <div className="fillers-container">
            <div className='ukrainImage'>
                <img src="/ukrainePoster.webp" />
            </div>
            <div className="ukrainText">
                <span className="span1-filler">Von Friedrichshain in die ganze Welt                </span>
                <br></br>
                <span className="span2-filler">Aus Berlin. Für Berlin. Danke Berlin.
                </span>
                <Link to="/wmk-for-ukraine"> {/* Add the route path */}
                    <button className="more-button btnfillers btn-ukrine">Unsere Standorte
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FillersHomePage01;