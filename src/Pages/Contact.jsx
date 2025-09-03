import CtaSection from "../Components/Cta-section";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../page-style/Contact.css";

const Contact = () => {


  return (
    <>
      <Header />
      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Get in Touch With Us</h1>
            <p>
              Have questions or need assistance? We’re here to help you with bookings,
              travel plans, and more. Contact us anytime!
            </p>
          </div>
        </section>


        {/* Contact Info */}
        <section className="contact-info">
          <div className="info-card">
            <img src="/image/PicC1.png" alt="location" />
            <h3>Our Office</h3>
            <p>123 Travel Street, Ghaziabad, India</p>
          </div>
          <div className="info-card">
            <img src="/image/PicC2.png" alt="email" />
            <h3>Email Us</h3>
            <p>support@travelmate.com</p>
          </div>
          <div className="info-card">
            <img src="/image/PicC3.png" alt="phone" />
            <h3>Call Us</h3>
            <p>+91 9876543210</p>
          </div>
        </section>

        {/* About & Mission */}
        <section className="about-mission">
          <div className="about-text">
            <h2>About TravelMeat</h2>
            <p>
              TravelMeat is your trusted partner for exploring breathtaking
              destinations across the globe. From serene mountains to sunny beaches,
              we bring you closer to unforgettable journeys.
            </p>
            <h3>Our Mission</h3>
            <p>
              To provide the best travel experiences with comfort, safety, and
              affordability while making your journey full of memories.
              "Your Adventure, Our Commitment."
            </p>
          </div>
          <div className="about-image">
            <img
              src="/image/PicC4.jpeg"
              alt="About TravelMeat"
            />
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="contact-container">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-map">
            <h2>Our Location</h2>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1234567890123!2d77.4310!3d28.6679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf15c7b2dc8b7%3A0xabcdef1234567890!2sGovindpuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
      <CtaSection />
      <Footer />
    </>
  )
};

export default Contact;