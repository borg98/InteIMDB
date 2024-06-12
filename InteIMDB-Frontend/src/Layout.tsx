import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";

export function Layout() {
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
