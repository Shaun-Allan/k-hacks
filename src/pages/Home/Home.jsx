import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.css";
import { Button, Typography } from "antd";
import { GiSteeringWheel } from "react-icons/gi";
import "./Particles.css";

const Home = () => {
  const { Title } = Typography;
  const navigate = useNavigate();
  return (
    <>
      <Header className="header" />

      <div className="content">
        <img src="/home_car.png" alt="car" className="homeCar" />

        <div className="homeDetails">
          <div className="homeDetailsPara">
            <Title level={3}>Car Simulator</Title>
            <p>
              This is car simulator that allows you to have real time car
              simulation data
            </p>
          </div>
          <Button
            size={"large"}
            className="localButton"
            onClick={() => navigate("/inputs")}
          >
            Start Simulation
            <GiSteeringWheel className="steerIcon" />
          </Button>
        </div>

        
        <div className="particles">
          <div className="white">
            <div className="squares">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
          <div className="grey"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
