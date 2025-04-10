import React, { useState } from 'react';

function Payment() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment details submitted!');
    // ...payment processing logic...
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handlePayment} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Cardholder Name</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name on card"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="XXXX XXXX XXXX XXXX"
            required
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 mb-2">Expiry Date</label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-gray-700 mb-2">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="CVV"
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default Payment;
