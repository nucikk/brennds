import "../Style/home.css";
import bannerImage1 from "../Image/Rectangle 63.png";
import bannerImage2 from "../Image/Rectangle 64.png";
import bannerImage3 from "../Image/Rectangle 65.png";
import timelineImage from "../Image/Rectangle 58.png";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-banner">
        <img src={bannerImage1} alt="Banner 1" />
        <img src={bannerImage2} alt="Banner 2" />
        <img src={bannerImage3} alt="Banner 3" />
      </div>

      {/* Home Content */}
      <div className="home-content">
        <h1 className="home-heading">Brand Application</h1>
        <button className="home-btn-topic">Brand Application Elements</button>

        {/* Home Timeline */}
        <div className="home-timeline">
          <p>
            Print materials: Guidelines for the use of the brand elements in
            printed materials, such as business cards, brochures, and flyers.
          </p>
          <p>
            Digital materials: Guidelines for the use of the brand elements in
            digital materials, such as websites, social media, and emails.
          </p>
          <p>
            Merchandise: Guidelines for the use of the brand elements in
            merchandise, such as clothing and promotional items.
          </p>
          <img className="timeline-photo" src={timelineImage} alt="Timeline" />
        </div>
      </div>
    </div>
  );
};

export default Home;
