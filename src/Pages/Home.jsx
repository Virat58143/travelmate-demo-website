import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaGlobeAsia, FaHeadset, FaSmile, FaPlaneDeparture, FaHotel, FaUmbrellaBeach, FaHiking } from "react-icons/fa";
import CountUp from "react-countup";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../page-style/Home.css";
import CtaSection from "../Components/Cta-section";


const Home = () => {

  

  return (
    <>

      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Explore the World with Us</h1>
          <p>
            Discover breathtaking destinations, unique experiences, and unforgettable
            adventures.
          </p>
          <Link to="/Destinations" className="btn-hero">
            View Plain
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">

          {/* Left Side - Images */}
          <div className="about-images">
            <img
              src="https://tulumtables.com/images/posts/original/KUR_Coco-beach-party_1600x900%20(1).jpg"
              alt="Travel"
            />
            <img
              src={`${import.meta.env.BASE_URL}image/Pic2.jpeg`}
              alt="Tourist"
            />
            <img
              src={`${import.meta.env.BASE_URL}image/Pic3.jpeg`}
              alt="Adventure"
            />
            <img
              src={`${import.meta.env.BASE_URL}image/Pic4.jpeg`}
              alt="Desert"
            />
          </div>

          {/* Right Side - Text */}
          <div className="about-text">
            <p className="about-tag">ABOUT US</p>
            <h2>We Make Travel Accessible and Enjoyable</h2>
            <p>
              Our mission is to make travel not just easy, but also budget-friendly, safe,
              and truly memorable for everyone. We believe that every journey should be filled with joy,
              comfort, and unforgettable experiences. Whether you dream of exploring snow-capped mountains,
              relaxing on sunny beaches, walking through ancient cultural wonders, or enjoying vibrant city life,
              we are here to make it possible for you. With trusted guides, comfortable stays, and well-planned trips,
              we ensure that your travel experience is smooth, affordable, and filled with lasting memories. No matter where you go,
              our goal is to turn every trip into a beautiful story that you will cherish forever.
            </p>

            <Link to="/About" className="btn-hero">
              More About
            </Link>
          </div>
        </div>
      </section>


      <section className="cards-section">
        <h2 className="cards-title">Popular Destinations</h2>
        <div className="cards-container">

          {/* Card 1 */}
          <div className="card">
            <img
              src={`${import.meta.env.BASE_URL}image/Pic5.webp`}
              alt="Beach"
            />
            <h3>Waterfalls & Lakes </h3>
            <p>Relax at scenic waterfalls or enjoy boating, fishing, and sunset views at peaceful lakes.</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img
              src={`${import.meta.env.BASE_URL}image/Pic6.jpg`}
              alt="Mountains"
            />
            <h3>Adventure Treks </h3>
            <p>Challenge yourself with high-altitude treks, jungle trails, and valley walks. A must for nature lovers who seek both thrill and breathtaking landscapes.</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img
              src={`${import.meta.env.BASE_URL}image/Pic7.jpg`}
              alt="Temple"
            />
            <h3>Prem Mandir</h3>
            <p>Prem Mandir, located in Vrindavan, is a magnificent temple dedicated to Lord Krishna. Famous for its stunning white marble architecture and mesmerizing light shows, it is not just a place of worship but also a symbol of love, devotion, and spiritual peace.</p>
          </div>

          {/* Card 1 */}
          <div className="card">
            <img
              src={`${import.meta.env.BASE_URL}image/Pic8.jpg`}
              alt="Beach"
            />
            <h3>Party Beaches</h3>
            <p>Dance, enjoy live music, and feel the vibrant nightlife as waves crash beside you. Party beaches are perfect for those who love energy, fun, and unforgettable seaside moments.</p>

          </div>

          {/* Card 2 */}
          <div className="card">
            <img
              src={`${import.meta.env.BASE_URL}image/Pic9.jpg`}
              alt="Cultural Heritage"
            />
            <h3>Cultural Heritage</h3>
            <p>Discover the beauty of history and traditions by exploring ancient temples, monuments, and local festivals. A journey into the soul of India’s rich heritage.</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img
              src={`${import.meta.env.BASE_URL}image/Pic10.avif`}
            />
            <h3>Wildlife Safaris</h3>
            <p>Experience the thrill of spotting tigers, elephants, and exotic birds in their natural habitat. A perfect escape for wildlife photographers and nature explorers.</p>
          </div>
        </div>


      </section>


      <section className="tourism-section">
        <div className="tourism-content">
          <h2 className="tourism-title">
            Discover the World with <br /> Personalized Travel Experiences
          </h2>
          <p className="tourism-text">
            Our team of seasoned travel experts brings years of experience and an
            in-depth understanding of the world’s most captivating destinations.
            Whether you’re seeking thrilling adventures, relaxing beach holidays,
            or cultural explorations — we believe travel is a personal journey.
            That’s why we design unique travel plans that reflect your interests,
            budget, and lifestyle.
          </p>

          <div className="tourism-highlights">
            <div className="highlight-box">
              <FaHiking className="highlight-icon" />
              <p>Adventurous Treks</p>
            </div>
            <div className="highlight-box">
              <FaUmbrellaBeach className="highlight-icon" />
              <p>Relaxing Getaways</p>
            </div>
            <div className="highlight-box">
              <FaHotel className="highlight-icon" />
              <p>Luxury Stays</p>
            </div>
            <div className="highlight-box">
              <FaPlaneDeparture className="highlight-icon" />
              <p>Expert Guides</p>
            </div>
          </div>

          <div className="customer-info">
            <img
              src={`${import.meta.env.BASE_URL}image/Pic11.jpeg`}
              alt="customer"
              className="customer-img"
            />
            <img
              src={`${import.meta.env.BASE_URL}image/Pic12.jpeg`}
              alt="customer"
              className="customer-img"
            />
            <span className="customer-count">500K+ Happy Travelers</span>
          </div>
        </div>

        <div className="tourism-image">
          <img
            src={`${import.meta.env.BASE_URL}image/Pic13.png`}
            alt="Tourism Experience"
          />
        </div>
      </section>

      <section className="stats-section">
        <h2 className="star-title">Review</h2>
        <div className="stats-container">

          {/* Stat 1 */}
          <div className="stat-box">
            <FaUsers className="stat-icon" />
            <div className="stat-number">
              <CountUp start={0} end={100} duration={5} />+
            </div>
            <p className="stat-label">Years of Experience</p>
          </div>

          {/* Stat 2 */}
          <div className="stat-box">
            <FaGlobeAsia className="stat-icon" />
            <div className="stat-number">
              <CountUp start={0} end={1000} duration={5} />+
            </div>
            <p className="stat-label">Destinations</p>
          </div>

          {/* Stat 3 */}
          <div className="stat-box">
            <FaHeadset className="stat-icon" />
            <div className="stat-number">
              24/7+
            </div>
            <p className="stat-label">Customer Support</p>
          </div>

          {/* Stat 4 */}
          <div className="stat-box">
            <FaSmile className="stat-icon" />
            <div className="stat-number">
              <CountUp start={0} end={98} duration={5} />%
            </div>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
      </section>


      <CtaSection />


      <Footer />
    </>
  )
};

export default Home;
