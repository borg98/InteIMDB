import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useCart } from "../context/CartContext";
import "../styles/pages/Checkout.scss";
import { IMovie } from "../models/IMovie";

const stripePromise = loadStripe(
  "pk_test_51PJeAX2LDDRd0nb94oPYuwNucVCMguiDxFVh7DKXG5L0Ny5cz7jGfGoDJRGDAVOJ9xyJODpCKvT6vPs9hrq1Fu1600JsmHuDmK"
);

export function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const { movies } = useCart();

  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: movies }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [movies]);

  const options = {
    clientSecret,
  };

  const getTotalPrice = (movies: IMovie[]): number => {
    return movies.reduce((total, movie) => total + movie.price, 0);
  };

  const total = getTotalPrice(movies);

  return (
    <>
      <h3 className="checkout__headline--primary">Checkout</h3>
      <section className="checkout">
        <div className="checkout__stripe">
          <h5 className="checkout__headline--secondary">Payment</h5>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
        <section className="checkout__movies">
          <h5 className="checkout__headline--secondary">Your cart:</h5>
          {movies?.map((m, index) => (
            <section key={index} className="checkout__movieItem">
              <p className="checkout__movieItem--title">{m.title}</p>
              <p className="checkout__movieItem--price">{m.price} SEK</p>
            </section>
          ))}
          <h5 className="checkout__totalPrice">Total: {total} SEK</h5>
        </section>
      </section>
    </>
  );
}
