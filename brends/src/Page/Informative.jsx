import "../Style/informative.css";
import infobanner from "../Image/Rectangle 36.png";
import flowerBaneer from "../Image/Rectangle 38.png";
const Informative = () => {
  return (
    <div className="info-wrapper">
      <div className="info-content">
        <div>
          <h1 className="info-title">Brand Voice and Tone</h1>
          <p className="info-description">
            Our tone of voice is friendly, approachable, and professional. We
            aim to communicate with our audience in a way that is both
            informative and engaging. We avoid using overly technical language
            or jargon and strive to communicate in a way that is easy to
            understand.
          </p>
          <img src={infobanner} alt="Info Banner"  />
        </div>
      </div>
      <div className="informative-side-container">
        <img src={flowerBaneer} alt="Flower Banner" />
        <div className="informative-buttons">
          <button>Friendly</button>
          <button>Approachable</button>
          <button>Professional</button>
        </div>
      </div>
    </div>
  );
};

export default Informative;
