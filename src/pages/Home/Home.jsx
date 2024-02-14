import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.css";
import { Button, Typography } from "antd";

const Home = () => {
  const { Title } = Typography;
  const navigate = useNavigate();
  return (
    <>
      <Header className="header" />

      <div className="content">
        <img src="/home_car.png" alt="car" className="homeCar" />

        <div className="homeDetails">
          <Title level={3}>Car Simulator</Title>
          <p>
            This is car simulator that allows you to have real time car
            simulation data
          </p>
          <Button
            size={"large"}
            className="localButton"
            onClick={() => navigate("/inputs")}
          >
            Start Simulation
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
