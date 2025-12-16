import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../public/styles/global.css";
import { ToastContainer } from "react-toastify";
import GeneralLayout from "./layouts/GeneralLayout";
import HomePage from "./pages";
import Swap from "./pages/swap";
import Sell from "./pages/sell";
import OtherLayout from "./layouts/OtherLayout";
import Business from "./pages/business";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route element={<GeneralLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/sell" element={<Sell />} />
          </Route>
          <Route element={<OtherLayout />}>
            <Route path="/business" element={<Business />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
