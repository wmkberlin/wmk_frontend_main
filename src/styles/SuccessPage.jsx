import { useEffect , useRef, useState} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SuccessPageStripe = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");
  const orderId = searchParams.get("order_id");
    const hasFetched = useRef(false); // Prevent multiple API calls
    const [isProcessing, setIsProcessing] = useState(true); // Track processing state

  useEffect(() => {
    let isMounted = true; // Track if the component is still mounted

    if (sessionId && orderId) {
      hasFetched.current = true; // Set flag to prevent duplicate calls

      axios
        .post("https://wmk-backend.onrender.com/api/payments/capturePayment", {
          token: sessionId,
          orderId,
          paymentMethod: "stripe",
        })
        .then(() => {
          if (isMounted) {
            alert("Payment Successful!");
            localStorage.removeItem("cart");
            navigate(`/order-success/${orderId}`);
          }
        })
        .catch(() => {
          if (isMounted) {
            alert("Error processing payment.");
            setIsProcessing(false); // Stop processing state on error
          }
        });
    }

    return () => {
      isMounted = false; // Cleanup function to prevent updates on unmounted component
    };
  }, [sessionId, orderId, navigate]);

  return (
    <div className="success-page-container">
        <div className="loader-container">
            {isProcessing && <div className="loader"></div>} {/* Show loader while processing */}
            <h2>Processing Payment...</h2>
        </div>
    </div>
);};

export default SuccessPageStripe;