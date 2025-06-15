import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SuccessPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get("token");
    const payerId = searchParams.get("PayerID");
    const orderId = searchParams.get("order_id"); // Capture order ID
    const hasFetched = useRef(false); // Prevent multiple API calls
    const [isProcessing, setIsProcessing] = useState(true); // Track processing state

    useEffect(() => {
        if (token && payerId && orderId && !hasFetched.current) {
            hasFetched.current = true; // Set flag to prevent duplicate calls

                        axios.post("https://wmk-backend.onrender.com/api/payments/capturePayment", { token, payerId, orderId , paymentMethod: "paypal"})
                .then(() => {
                    alert("Payment Successful!");
                    localStorage.removeItem("cart"); // Clear cart after payment
                    navigate(`/order-success/${orderId}`);
                })
                .catch(() => {
                    alert("Error processing payment.");
                    setIsProcessing(false); // Stop processing state on error
                });
        }
    }, [token, payerId, orderId, navigate]);

    return (
        <div className="success-page-container">
            <div className="loader-container">
                {isProcessing && <div className="loader"></div>} {/* Show loader while processing */}
                <h2>Processing Payment...</h2>
            </div>
        </div>
    );
};

export default SuccessPage;