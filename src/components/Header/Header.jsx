
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <h1 className="title">Nocturnals</h1>

        <div className="buttons">
          <Button
            className="button"
            size="large"
            onClick={() => {
              navigate("inputs");
            }}
          >
            Start Simulation
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
