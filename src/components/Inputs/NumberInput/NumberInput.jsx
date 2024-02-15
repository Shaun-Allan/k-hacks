/* eslint-disable react/prop-types */

import "./NumberInput.css";
import { InputNumber, Select } from "antd";

const NumberInput = ({input}) => {
  const { Option } = Select;
  const selectAfter = (
    <Select
      defaultValue={input.units[0]}
      style={{
        width: 100,
      }}
    >
      {input.units.map((u) => (
        <Option className="option" key={u} value={u}>
          {u}
        </Option>
      ))}
    </Select>
  );
  return (
    <>
      <div className="inputCard">
        <div className="prompt">{input.prompt}</div>
        <div className="inputFieldContainer">
          <InputNumber
            className="inputField"
            size="large"
            addonAfter={selectAfter}
            defaultValue={100}
          />
        </div>
      </div>
    </>
  );
};

export default NumberInput;
