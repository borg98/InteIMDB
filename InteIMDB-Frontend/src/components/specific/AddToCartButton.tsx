import { IMovie } from "../../models/IMovie";
import { postMovieToCart } from "../../services/fetchMovies";
import "../../styles/components/specific/AddToCartButton.scss";

interface AddToCartButtonProps {
  movie: IMovie;
}

export function AddToCartButton({ movie }: AddToCartButtonProps) {
  const handleClick = () => {
    const res = postMovieToCart(movie, 1);
    console.log(res);
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Add to Cart
    </button>
  );
}
