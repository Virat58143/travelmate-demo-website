
import Header from "../Components/Header";
import "../page-style/About.css";
import CtaSection from "../Components/Cta-section";
import Footer from "../Components/Footer";


const About = () => {


    return (
        <>
            <Header />
            <div className="about-page">
                <section className="about-hero">
                    <div className="about-hero-content">
                        <h1>Your Journey, Our Commitment</h1>
                        <p>
                            We make travel easy, affordable, and unforgettable with trusted guides and comfortable stays.
                            From beaches to mountains and divine places like Prem Mandir, every journey becomes a memory to cherish.
                        </p>

                    </div>
                </section>

                {/* About Info */}
                <section className="about-info">
                    <div className="about-text">
                        <h2>Who We Are</h2>
                        <p>
                            TravelMeat is your trusted travel companion, helping you explore the beauty of the world.
                            For us, travel is not just about visiting new places, but about creating memories, experiencing cultures,
                            and connecting with people.
                        </p>
                        <p>
                            Our mission is simple – to provide safe, budget-friendly, and unforgettable journeys for every traveler,
                            whether you seek adventure, relaxation, culture, or luxury.
                        </p>
                    </div>
                    <div className="about-img">
                        <img
                            src="/image/PicA1.avif"
                            alt="TravelMeat Journey"
                        />
                    </div>
                </section>

                <section className="about-info second-about-info">
                    <div className="about-text">
                        <h2>Discover Hidden Paradises</h2>
                        <p>
                            Explore untouched destinations and secret getaways that few travelers know about.
                            From serene beaches to lush forests and remote villages, these hidden paradises promise peace, adventure,
                            and experiences you’ll remember forever. Perfect for travelers seeking unique and offbeat journeys.
                        </p>
                    </div>
                    <div className="about-img">
                        <img
                            src="/image/PicA2.jpeg"
                            alt="TravelMeat Journey"
                        />
                    </div>
                </section>

                <section className="about-info">
                    <div className="about-text">
                        <h2>Experience Culture & Heritage</h2>
                        <p>
                            Dive into the rich traditions, vibrant festivals, and historic landmarks of different regions.
                            Visit iconic temples like Prem Mandir, explore ancient forts, and interact with local communities to understand their way of life.
                            A journey that enriches your mind and soul while creating unforgettable memories.
                        </p>
                    </div>
                    <div className="about-img">
                        <img
                            src="/image/PicA3.webp"
                            alt="TravelMeat Journey"
                        />
                    </div>
                </section>

                <section className="about-info second-about-info">
                    <div className="about-text">
                        <h2>Adventure & Thrill</h2>
                        <p>
                            For adrenaline seekers, experience thrilling activities like trekking, river rafting, paragliding, and wildlife safaris.
                            Explore mountains, valleys, and jungles with expert guides, ensuring a safe yet exhilarating adventure for travelers of all ages.
                        </p>
                    </div>
                    <div className="about-img">
                        <img
                            src="/image/PicA4.webp"
                            alt="TravelMeat Journey"
                        />
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="mission-vision">
                    <div className="mv-card">
                        <h3>🌟 Our Mission</h3>
                        <p>
                            To make travel accessible and enjoyable for everyone by offering the
                            best services, affordable packages, and unforgettable experiences.
                        </p>
                    </div>
                    <div className="mv-card">
                        <h3>🚀 Our Vision</h3>
                        <p>
                            To be the world’s most loved and trusted travel platform, inspiring
                            people to explore and experience life beyond boundaries.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="why-choose">
                    <h2>Why Choose TravelMeat?</h2>
                    <div className="features">
                        <div className="feature-card">
                            <img src="/image/PicA5.png" alt="affordable" />
                            <h4>Affordable Packages</h4>
                            <p>Best travel deals at pocket-friendly prices.</p>
                        </div>
                        <div className="feature-card">
                            <img src="/image/PicA6.png "alt="support" />
                            <h4>24/7 Support</h4>
                            <p>We are here for you anytime, anywhere.</p>
                        </div>
                        <div className="feature-card">
                            <img src="/image/PicA7.png" alt="trusted" />
                            <h4>Trusted by Travelers</h4>
                            <p>Thousands of happy travelers worldwide 🌍.</p>
                        </div>
                    </div>
                </section>
            </div>
            <CtaSection />
            <Footer />

        </>
    )
};

export default About;