import { useNavigate } from "react-router-dom";
import "../styles/pages/Order.scss";

export const Order = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <section className="order">
        <h3>Thank you for your order!</h3>
        <button className="order__button" onClick={() => handleClick()}>
          Back to movies
        </button>
      </section>
    </>
  );
};
