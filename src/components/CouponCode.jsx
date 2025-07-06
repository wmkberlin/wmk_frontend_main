import React, { useState } from 'react';

const CouponCode = ({ orderAmount, productCategory, onApply }) => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const handleApply = async () => {
    setStatus('');
    setMessage('');
    if (!code.trim()) {
      setStatus('invalid');
      setMessage('Bitte geben Sie einen Gutscheincode ein.');
      return;
    }
    if (orderAmount == null || isNaN(orderAmount) || Number(orderAmount) <= 0) {
      setStatus('invalid');
      setMessage('Bitte geben Sie einen gültigen Bestellwert ein.');
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/api/discount-coupons/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          discountCode: code.trim(),
          orderAmount,
          productCategory,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Gutschein angewendet!');
        onApply && onApply(data.appliedCoupon, code.trim());
      } else {
        setStatus('invalid');
        setMessage(data.message || 'Ungültiger Gutscheincode.');
        onApply && onApply(null, code.trim());
      }
    } catch (error) {
      setStatus('invalid');
      setMessage('Fehler beim Anwenden des Gutscheins.');
      onApply && onApply(null, code.trim());
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor="coupon-input"><strong>Gutscheincode:</strong></label>
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        <input
          id="coupon-input"
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Code eingeben"
        />
        <button type="button" onClick={handleApply}>
          Anwenden
        </button>
      </div>
      {message && (
        <div style={{ color: status === 'success' ? 'green' : 'red' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default CouponCode; 