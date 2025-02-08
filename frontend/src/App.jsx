import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/cars" element={<Cars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPass />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/my-bookings" element={<Bookings />} />
        <Route path="/car-details/:carId" element={<CarDetails />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/notify/:bookingId" element={<Notify />} /> */}
      </Routes>
    </div>
  );
};

export default App;
