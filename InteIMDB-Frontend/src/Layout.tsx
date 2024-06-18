import { Outlet, useNavigate } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";

export function Layout() {
  const navigate = useNavigate();

  const paymentIntentClientSecret = new URLSearchParams(
    window.location.search
  ).get("payment_intent_client_secret");

  if (paymentIntentClientSecret) {
    navigate("/order");
  }
  return (
    <>
      <header>{<Navigation />}</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
