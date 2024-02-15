
import { Typography, Divider, Button } from "antd";
import "./Inputs.css";
import { useNavigate } from "react-router-dom";
import NumberInput from "../../components/Inputs/NumberInput/NumberInput";
import { GiSteeringWheel } from "react-icons/gi";
import {
  ODOMETER,
  BATTERY_VOLTAGE,
  FUEL_CAPACITY,
  FUEL_LEVEL,
  TIRE_PRESSURE,
} from "../../utils/inputs";
import SliderInput from "../../components/Inputs/SliderInput/SliderInput";

const Inputs = () => {
  const { Title } = Typography;
  const navigate = useNavigate();
  return (
    <>
      <div className="inputsPage">
        <h3 className="titleInputs">Configure</h3>
        <div className="inputsContent">
          <div>
            <Title level={4}>Diagnostics</Title>
            <div className="subtopicContainer">
              <NumberInput input={ODOMETER} />
              <NumberInput input={BATTERY_VOLTAGE} />
            </div>
            <Divider />
          </div>
          <div>
            <Title level={4}>Fuel</Title>
            <div className="subtopicContainer">
              <NumberInput input={FUEL_CAPACITY} />
              <SliderInput input={FUEL_LEVEL} />
            </div>
            <Divider />
          </div>
          <div>
            <Title level={4}>Tire Pressure</Title>
            <div className="subtopicContainer">
              {TIRE_PRESSURE.prompt.map((e) => (
                <NumberInput
                  input={{ prompt: e, units: TIRE_PRESSURE.units }}
                  key={e}
                />
              ))}
            </div>
            <Divider />
          </div>
          <Button
            size={"large"}
            className="localInputsButton"
            onClick={() => navigate("/simulation")}
          >
            Start Simulation
            <GiSteeringWheel className="steerIcon"/>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Inputs;
