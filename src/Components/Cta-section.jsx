import { Link } from "react-router-dom";
import "../page-style/CtaSection.css";

const CtaSection = () =>{

    return(
        <>
        
            {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Let’s Plan Your Dream Journey</h2>
          <p>
            Our travel experts are here to create unforgettable memories for you.  
            Get the best packages and personalized experiences today!
          </p>
          <Link to="/Contact" className="btn-cta">
            Contact →
          </Link>
        </div>
      </section>
        </>
    )
};

export default CtaSection;