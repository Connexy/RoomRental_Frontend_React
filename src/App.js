import "./App.css";
import "./Login.css";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Theme/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetail from "./Pages/Theme/UserDetail";
import PrivateRoute from "./Routes/PrivateRoute";
import RentalListing from "./Pages/Theme/RentalListing";
import Contact from "./Pages/Theme/Contact";
import RoomDetails from "./Pages/Theme/RoomDetails";
import AboutUs from "./Pages/Theme/AboutUs";
import Layout from "./Pages/Theme/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/logout-page" element={<Login />} />
          <Route path="/register-page" element={<Register />} />
          <Route path="/landing-page" element={<LandingPage />} />
          {/* <Route path="/rental-listing-page" element={<PrivateRoute component={RentalListing} />} /> */}
          <Route path="/rental-listing-page" element={<RentalListing />} />
          {/* <Route path="/user-detail-page" element={<PrivateRoute component={UserDetail} />} /> */}
          <Route path="/user-detail-page" element={<UserDetail />} />
          <Route path="/about-us-page" element={<PrivateRoute component={AboutUs} />} />
          <Route path="/contact-page" element={<PrivateRoute component={Contact} />} />
          {/* <Route path="/room-details-page/:index" element={<PrivateRoute component={RoomDetails} />} /> */}
          <Route path="/room-details-page/:index" element={<RoomDetails />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
