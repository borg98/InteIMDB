import { useNavigate } from "react-router-dom";
import "../styles/pages/Order.scss";

export function Order() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/");
  };
  return (
    <>
      <section className="order">
        <h3 className="order__heandline">Thank you for your order!</h3>
        <button className="order__button" onClick={() => handleclick()}>
          Back to Movies
        </button>
      </section>
    </>
  );
}
