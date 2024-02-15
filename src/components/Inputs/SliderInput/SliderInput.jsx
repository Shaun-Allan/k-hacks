/* eslint-disable react/prop-types */

import "./SliderInput.css";
import { Slider } from "antd";

const marks = {
  0: {
    style: {
      color: "rgba(255,255,255,0.7)",
    },
    label: "0%",
  },
  25: {
    style: {
      color: "rgba(255,255,255,0.7)",
    },
    label: "25%",
  },
  50: {
    style: {
      color: "rgba(255,255,255,0.7)",
    },
    label: "50%",
  },
  75: {
    style: {
      color: "rgba(255,255,255,0.7)",
    },
    label: "75%",
  },
  100: {
    style: {
      color: "rgb(41, 142, 5)",
    },
    label: <strong>100%</strong>,
  },
};

const SliderInput = ({ input }) => {
  return (
    <>
      <div className="inputCard">
        <div className="prompt">{input.prompt}</div>
        <div className="sliderInputFieldContainer">
          <Slider className="sliderInput" marks={marks} defaultValue={50} />
        </div>
      </div>
    </>
  );
};

export default SliderInput;
