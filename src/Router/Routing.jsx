import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Destinations from "../Pages/Destinations";
import Contact from "../Pages/Contact";
import BookPage from "../Pages/Booking";
import PaymentPage from "../Pages/Payment";


const Router = () => {

    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Destinations" element={<Destinations />} />
                    <Route path="/book/:id" element={<BookPage />} />
                    <Route path="/Payment" element={<PaymentPage />} />
                    <Route path="/Contact" element={<Contact />} />

                </Routes>
            </BrowserRouter>

        </>
    )
};

export default Router;