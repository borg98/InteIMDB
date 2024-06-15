import { ReactNode, createContext, useContext, useState } from "react";
import { IMovie } from "../models/IMovie";

export interface ICartContext {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <CartContext.Provider value={{ movies, setMovies }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
