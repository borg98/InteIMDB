import "../styles/components/Cart.scss";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";

interface iCart {
  showCart: boolean;
  cartRef: React.MutableRefObject<HTMLDivElement | null>;
}

const cart = [
  {
    id: 1,
    title: "Negroni",
    price: 49,
    quantity: 1,
  },
];

export function Cart(props: iCart) {
  return (
    <>
      <section className="cart" ref={props.cartRef}>
        <section
          className={
            props.showCart ? "cart__container active" : "cart__container"
          }
        >
          {props.showCart ? (
            cart.length !== 0 ? (
              <>
                <p className="cart__headline">MOVIES ADDED TO YOUR CART</p>
                <section className="cart__items">
                  {cart.map((m, index) => (
                    <section className="cart__item" key={index}>
                      <section className="cart__item-image-container">
                        <img
                          src="https://yodqmhxvejxqcxxiddfc.supabase.co/storage/v1/object/public/test/1.png"
                          alt="En omslagsbild för film"
                        />
                      </section>
                      <section className="cart__item-info-container">
                        <p className="cart__item-title">{m.title}</p>
                        <p className="cart__item-price">{m.price} SEK</p>
                        <section className="cart__item-quantity-container">
                          <section className="cart__item-quantity">
                            <p className="cart__item-quantity-icon cart__item-quantity-icon--minus">
                              <HiMinus />
                            </p>
                            <p className="cart__item-quantity-number">1</p>
                            <p className="cart__item-quantity-icon cart__item-quantity-icon--plus">
                              <GoPlus />
                            </p>
                          </section>
                          <section className="cart__item-trashcan">
                            <CiTrash />
                          </section>
                        </section>
                      </section>
                    </section>
                  ))}
                </section>
                <section className="cart__checkout-container">
                  <p className="cart__checkout-price">TOTALT: 49 SEK</p>
                  <button className="cart__checkout-button">CHECKOUT</button>
                </section>
              </>
            ) : (
              <section className="cart__empty-message">
                <h5>YOUR CART IS EMPTY</h5>
              </section>
            )
          ) : (
            ""
          )}
        </section>
      </section>
    </>
  );
}
