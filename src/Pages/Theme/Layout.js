import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import LandingPage from "./LandingPage";

const Layout = () => {
  return (
    <div>
      <div className="all-nav">
        <Navbar />
      </div>

      <div className="layout-main-body">
        {Outlet}
        <LandingPage />
      </div>
    </div>
  );
};
export default Layout;
