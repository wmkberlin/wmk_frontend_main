import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/fillersHomePage0.css";

const FillersHomePage0 = () => {
    return (
        <div className="fillers-container">
            <div className="filler-item-0 filler-item-01">
                <span className="span1-filler">So fing alles an</span>
                <br></br>
                <span className="span2-filler">Wollen Möbel Kaufen?! Story</span>
                <Link to="/about-us"> {/* Add the route path */}
                    <button className="more-button btnfillers"> Lerne uns kennen </button>
                </Link>
            </div>
            <div className="filler-item-0 filler-item-02">
                <span className="span1-filler">Nachhaltiger geht`s nicht!</span>
                <br></br>
                <span className="span2-filler">Think green - buy used!</span>
                <Link to="/thinkGreen"> {/* Add the route path */}
                    <button className="more-button btnfillers">MACH MIT!</button>
                </Link>
            </div>
        </div>
    );
};

export default FillersHomePage0;