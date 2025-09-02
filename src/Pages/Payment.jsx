import CtaSection from "../Components/Cta-section";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../page-style/Payment.css";

const PaymentPage = () => {
    return (

        <>

            <Header />


            <div className="payment-page">

                <form className="payment-form">
                    <label>
                        Name on Card:
                        <input type="text" placeholder="Enter your name" required />
                    </label>
                    <label>
                        Card Number:
                        <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                    </label>
                    <label>
                        Expiry Date:
                        <input type="text" placeholder="MM/YY" required />
                    </label>
                    <label>
                        CVV:
                        <input type="password" placeholder="***" required />
                    </label>
                    <button type="submit" className="btn-pay">Pay Now</button>
                </form>
            </div>

            <CtaSection />
            <Footer />

        </>
    );
};

export default PaymentPage;
