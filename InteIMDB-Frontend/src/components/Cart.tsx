import "../styles/components/Cart.scss";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import { useEffect, useState } from "react";
import { fetchCart } from "../services/fetchMovies";
import { IMovie } from "../models/IMovie";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface ICartProps {
  showCart: boolean;
  cartRef: React.MutableRefObject<HTMLDivElement | null>;
  toggleCart: () => void;
}

export function Cart(props: ICartProps) {
  const [cart, setCart] = useState<IMovie[]>([]);
  const navigate = useNavigate();

  const { setMovies } = useCart();

  useEffect(() => {
    fetchCart(1).then((res) => {
      const movieArray = res?.flatMap((r) => {
        return r.movies;
      });
      movieArray && setCart(movieArray);
      movieArray && setMovies(movieArray);
    });
  }, [setMovies]);

  const getTotalPrice = (cart: IMovie[]): number => {
    return cart.reduce((total, movie) => total + movie.price, 0);
  };

  const total = getTotalPrice(cart);

  const handleCheckout = () => {
    navigate("/checkout");
    props.toggleCart();
  };

  return (
    <>
      <section className="cart" ref={props.cartRef}>
        <section
          className={
            props.showCart ? "cart__container active" : "cart__container"
          }
        >
          {props.showCart ? (
            cart?.length !== 0 ? (
              <>
                <p className="cart__headline">MOVIES ADDED TO YOUR CART</p>
                <section className="cart__items">
                  {cart?.map((m, index) => (
                    <section className="cart__item" key={index}>
                      <section className="cart__item-image-container">
                        <img src={m.img_url} alt="En omslagsbild för film" />
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
                  <p className="cart__checkout-price">TOTALT: {total} SEK</p>
                  {cart.length > 0 && (
                    <button
                      id="button_checkout"
                      className="cart__checkout-button"
                      onClick={() => handleCheckout()}
                    >
                      CHECKOUT
                    </button>
                  )}
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
