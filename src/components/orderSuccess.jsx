import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import '../styles/orderSuccess.css';
import { useShoppingCart } from "use-shopping-cart";


const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId } = useParams(); // Extract orderId from URL
  const [orderDetail, setOrderDetail] = useState(null);
  const [address, setAddress] = useState(null);
  const {clearCart} = useShoppingCart();
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`https://wmk-backend.onrender.com/api/payments/orders/${orderId}`, {
          method: "GET",
        });
        const data = await response.json();
        if (response.ok) {
          clearCart();
          setOrderDetail(data); // Set the order details in state
          setAddress(JSON.parse(data.shippingAddress))
          console.log(address);

        } else {
          console.error("Error fetching order details:", data.message);
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const handleContinueShopping = () => {
    navigate("/categories/all"); // Redirect to shop page
  };

  if (!orderDetail) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="order-success-container">
      <div className="order-card">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Thank you for shopping with us.</p>

        <div className="order-details">
          <h2>🛒 Order Summary</h2>
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Date:</strong> {new Date(orderDetail.orderDate).toLocaleDateString()}</p>
          <p><strong>Total:</strong> {orderDetail.orderTotal}€</p>
        </div>

        <div className="shipping-details">
          <h2>📦 Shipping Information</h2>
          <p><strong>Email:</strong> {orderDetail.customerEmail}</p>
          <p><strong>Address:</strong> {address.firstName} {address.lastName} , {address.apartment} {address.address}</p>
          {/* <p><strong>Shipping Method:</strong> {orderDetail.shippingMethod.name} ({orderDetail.shippingMethod.price}€)</p> */}
        </div>

        <div className="payment-details">
          <h2>💳 Payment Method</h2>
          <p><strong>Payment Type:</strong> {orderDetail.paymentMethod}</p>
          <p><strong>Payment Status:</strong> {orderDetail.paymemtData[0].status}</p>
          <p className="transactionId"><strong>Transaction ID:</strong> {orderDetail.paymemtData[0].paymentId}</p>
        </div>

        <div className="product-details">
          <h2>📦 Products Ordered</h2>
          {orderDetail.productListDetail.map((product, index) => (
            <div key={index} className="product-item">
              <img
                src={product.productImage}
                alt="img"
                className="search-product-image1"
              />
              <div>
                <span className="search-product-title">
                  {product.title}
                </span>
                <p><strong>SKU:</strong> {product.SKU}</p>
                <p><strong>Quantity:</strong> {product.qty}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="continue-button" onClick={handleContinueShopping}>
          Continue Shopping 🛍️
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;