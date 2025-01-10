import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PaymentForm = () => {
  const location = useLocation();
  const { title, price, length } = location.state || {};

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:4000/payment", {
        name,
        surname,
        email,
        date,
        plan: title,
        price,
        length,
      });

      toast.success(data.message || "Payment successful!");
      setPaymentStatus(true);
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error(error.response?.data?.message || "Payment failed. Try again!");
    }
  };

  return (
    <div className="payment-form">
      <h1>Payment for {title} Plan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={`Rs ${price}`} disabled />
        </div>
        <button type="submit">Proceed to Payment</button>
      </form>
      {paymentStatus && <p>Payment Successful!</p>}
    </div>
  );
};

export default PaymentForm;
