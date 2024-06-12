import "../styles/components/Cart.scss";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";

const cart = [
  {
    id: 1,
    title: "Negroni",
    price: 49,
    quantity: 1,
  },
];

export function Cart() {
  return (
    <>
      <section className="cart">
        <section className="cart__container">
          {cart.length !== 0 ? (
            <>
              <p className="cart__headline">MOVIES ADDED TO YOUR CART</p>
              <section className="cart__items">
                {cart.map((m, index) => (
                  <section className="cart__item" key={index}>
                    <section className="cart__image-container">
                      <img
                        src="https://yodqmhxvejxqcxxiddfc.supabase.co/storage/v1/object/public/test/1.png"
                        alt="En omslagsbild för film"
                      />
                    </section>
                    <section className="cart__info-container">
                      <p className="cart__item-title">{m.title}</p>
                      <p className="cart__item-price">{m.price} SEK</p>
                      <section className="cart__controls">
                        <section className="cart__quantity">
                          <p style={{ cursor: "pointer" }}>
                            <HiMinus />
                          </p>
                          <p>1</p>
                          <p style={{ cursor: "pointer" }}>
                            <GoPlus />
                          </p>
                        </section>
                        <section style={{ cursor: "pointer" }}>
                          <CiTrash />
                        </section>
                      </section>
                    </section>
                  </section>
                ))}
              </section>
              <section className="cart__checkout-container">
                <p>TOTALT: 49 SEK</p>
                <button className="cart__checkout-button">CHECKOUT</button>
              </section>
            </>
          ) : (
            <section className="cart__empty">
              <h5>YOUR CART IS EMPTY</h5>
            </section>
          )}
        </section>
      </section>
    </>
  );
}
