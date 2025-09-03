import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CtaSection from "../Components/Cta-section";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../page-style/Destinations.css";

const Destinations = () => {
  const navigate = useNavigate();

  // Page load pe top se start kare
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const places = [
    { id: 1, name: "Paris, France", img:  "/image/PicD1.jpeg", desc: "The city of love with Eiffel Tower, museums, and stunning streets." },
    { id: 2, name: "Maldives", img: "/image/PicD2.jpeg", desc: "Tropical paradise famous for beaches, blue lagoons, and coral reefs." },
    { id: 3, name: "Bali, Indonesia", img: "/image/PicD3.jpeg", desc: "A blend of culture, temples, rice terraces, and serene beaches." },
    { id: 4, name: "Dubai, UAE", img: "/image/PicD4.jpg", desc: "Luxury shopping, ultramodern architecture, and vibrant nightlife." },
    { id: 5, name: "Santorini, Greece", img:"/image/PicD5.jpg", desc: "Whitewashed houses, blue domes, and breathtaking sunset views." },
    { id: 6, name: "Switzerland", img:"/image/PicD6.jpeg", desc: "Heaven for nature lovers with Alps, lakes, and scenic train rides." },
    { id: 7, name: "New York, USA", img: "/image/PicD7.webp", desc: "The city that never sleeps with Times Square and Statue of Liberty." },
    { id: 8, name: "Tokyo, Japan", img: "/image/PicD8.jpeg", desc: "Blend of tradition and technology with temples and skyscrapers." }
  ];

  // Book Now click handler → scroll top + navigate
  const handleBookNow = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll top
    navigate(`/book/${id}`); // navigate to booking page
  };

  return (
    <>
      <Header />

      <section className="destinations-hero">
        <div className="destinations-hero-content">
          <h1>Wander, Explore, Repeat</h1>
          <p>
            Travel to breathtaking landscapes, vibrant cities, and sacred sites like Prem Mandir.
            Every destination is a new adventure, every journey a chance to create memories that last forever.
          </p>
        </div>
      </section>

      <section className="destinations">
        <h2>POPULAR DESTINATIONS</h2>
        <p className="subtitle">
          Explore the world’s most beautiful places and make your travel memorable.
        </p>

        <div className="destinations-grid">
          {places.map((place) => (
            <div className="card" key={place.id}>
              <img src={place.img} alt={place.name} />
              <div className="card-content">
                <h3>{place.name}</h3>
                <p>{place.desc}</p>
                <button className="btn-discover" onClick={() => handleBookNow(place.id)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
};

export default Destinations;
