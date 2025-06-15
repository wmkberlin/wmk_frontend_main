import React, { useState } from 'react';

const DUMMY_COUPONS = {
  'SAVE10': { type: 'percent', value: 10 }, // 10% off
  'FLAT50': { type: 'fixed', value: 50 },  // 50€ off
};

const CouponCode = ({ onApply }) => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');

  const handleApply = async () => {
    setStatus('');
    // Simulate API call delay
    await new Promise(res => setTimeout(res, 700));
    const coupon = DUMMY_COUPONS[code.trim().toUpperCase()];
    if (coupon) {
      setStatus('success');
      onApply(coupon, code.trim().toUpperCase());
    } else {
      setStatus('invalid');
      onApply(null, code.trim().toUpperCase());
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
      {status === 'success' && <div style={{ color: 'green' }}>Gutschein angewendet!</div>}
      {status === 'invalid' && <div style={{ color: 'red' }}>Ungültiger Gutscheincode.</div>}
    </div>
  );
};

export default CouponCode; 