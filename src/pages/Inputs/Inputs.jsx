import TextInput from "../../components/textInput/TextInput";
import SliderInput from "../../components/SliderInput/SliderInput";
import "./Inputs.css";
const dictionary = { prompt: "Odometer", units: ["km", "m", "mm"] };
const hehe = { prompt: "Fuel volume", units: ["ml", "l", "mm^3"] };
const batteryVoltage = { prompt: "Battery Voltage", units: ["V", "kV", "mV"] };
const fuelLevel = { prompt: "Fuel level" };

const Inputs = () => {
  return (
    <>
      <div className="inputHeading">Inputs</div>
      <div className="inputsContent">
        <div>
          <div className="subtitle">Diagnostics</div>
          <div className="Diagnostics1">
            <TextInput className="hi" key={dictionary} input={dictionary} />
            <TextInput className="ho" key={hehe} input={hehe} />
            <TextInput
              className="he"
              key={batteryVoltage}
              input={batteryVoltage}
            />
            <SliderInput className="ha" key={fuelLevel} input={fuelLevel} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputs;
