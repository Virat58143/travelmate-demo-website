import { Link, useParams } from "react-router-dom";
import "../page-style/Booking.css";
import Header from "../Components/Header";
import CtaSection from "../Components/Cta-section";
import Footer from "../Components/Footer";

const places = [
    {
        id: 1,
        name: "Paris, France",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        desc: "Paris, the city of love, is famous for its iconic Eiffel Tower, world-class museums like Louvre, charming streets filled with cafes, and exquisite French cuisine. Strolling along the Seine River and visiting Montmartre adds to its romantic charm.",
        price: "1,20,000"
    },
    {
        id: 2,
        name: "Maldives",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        desc: "The Maldives is a tropical paradise known for its crystal-clear turquoise waters, overwater bungalows, colorful coral reefs, and serene beaches. It’s perfect for snorkeling, diving, or simply relaxing in a luxurious island resort.",
        price: "1,20,000"
    },
    {
        id: 3,
        name: "Bali, Indonesia",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        desc: "Bali offers a rich cultural experience with its ancient temples, traditional ceremonies, lush rice terraces, and vibrant arts scene. Its serene beaches and wellness retreats make it a haven for relaxation and adventure alike.",
        price: "1,20,000"
    },
    {
        id: 4,
        name: "Dubai, UAE",
        img: "https://landmarksarchitects.com/wp-content/uploads/2025/01/UAE-Landmarks-Museum-of-the-Future-1212025.jpg",
        desc: "Dubai is a modern marvel with ultramodern skyscrapers, luxury shopping, desert safaris, and extravagant entertainment options. Don’t miss landmarks like Burj Khalifa, Palm Jumeirah, and the futuristic Museum of the Future.",
        price: "1,20,000"
    },
    {
        id: 5,
        name: "Santorini, Greece",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        desc: "Santorini is a breathtaking island famous for its whitewashed houses, blue-domed churches, stunning sunsets over the caldera, and crystal-clear waters. It’s perfect for romantic getaways, photography, and exploring charming villages.",
        price: "1,20,000"
    },
    {
        id: 6,
        name: "Switzerland",
        img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&q=80",
        desc: "Switzerland is a paradise for nature lovers with its majestic Alps, sparkling lakes, scenic train rides, and charming villages. Activities like skiing, hiking, and exploring chocolate and cheese factories add to the experience.",
        price: "1,20,000"
    },
    {
        id: 7,
        name: "New York, USA",
        img: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/New%20York/newyork-attractions-GettyImages-686726393.jpg?imwidth=640",
        desc: "New York City, the city that never sleeps, is a hub of culture, fashion, and entertainment. Explore Times Square, Statue of Liberty, Broadway shows, Central Park, and a diverse culinary scene that reflects its multicultural vibe.",
        price: "1,20,000"
    },
    {
        id: 8,
        name: "Tokyo, Japan",
        img: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800&q=80",
        desc: "Tokyo combines traditional and modern culture with ancient temples, futuristic skyscrapers, bustling streets, and world-renowned cuisine. Experience vibrant districts like Shibuya, historic Asakusa, and serene gardens for a complete Japanese adventure.",
        price: "1,20,000"
    }
];

const BookPage = () => {
    const { id } = useParams();
    const place = places.find((p) => p.id === parseInt(id));

    if (!place) return <h2>Destination Not Found</h2>;

    return (
        <>
            <Header />

            <section className="booking-hero">
                <div className="booking-hero-content">
                    <h1>Explore the World with Us</h1>
                    <p>
                        Discover breathtaking destinations, unique experiences, and unforgettable
                        adventures.
                    </p>

                </div>
            </section>

            <div className="book-page">
                <img src={place.img} alt={place.name} className="book-image" />
                <h1>{place.name}</h1>
                <p>{place.desc}</p>
                <h3>Price: {place.price}</h3>
                <Link className="btn-discover" to="/Payment">Confirm Booking</Link>
            </div>

            <CtaSection />
            <Footer />
        </>
    );
};

export default BookPage;
