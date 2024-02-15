/* eslint-disable react/prop-types */

import { Slider } from "antd";
import "./SliderInput.css";

const SliderInput = ({ input }) => {
  return (
    <div className="sliderInput">
      <div>{input.prompt}</div>
      <div>
        <Slider
          className="slider"
          defaultValue={30}
          tooltip={{
            open: true,
          }}
        />
      </div>
    </div>
  );
};

export default SliderInput;
