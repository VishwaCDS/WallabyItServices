import HomePageBanner from "../Components/HomePageBanner";
import ServiceCardsContainer from "../Components/ServiceCardsContainer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HomePageBanner />
      <ServiceCardsContainer />
      <div className="services-button-wrapper">
        <button className="see-more-btn" onClick={() => navigate("/Services")}>
          See More Services
        </button>
      </div>
    </div>
  );
};

export default Home;
