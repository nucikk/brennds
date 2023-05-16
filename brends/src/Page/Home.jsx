import "../Style/home.css"
import recentgle63 from "../Image/Rectangle 63.png"
import recentgle64 from "../Image/Rectangle 64.png"
import recentgle65 from "../Image/Rectangle 65.png"

const Home = () => {
  return (
    <div className="home-wrapper">
        <div className="home-banner">
        <img src={recentgle63} alt="" />
        <img src={recentgle64} alt="" />
        <img src={recentgle65} alt="" />
        </div>
    </div>
  )
}

export default Home