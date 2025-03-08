// Layout.jsx
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />  {/* Viktig: Viser innholdet til sidene */}
      </main>
    </>
  );
};

export default Layout;
