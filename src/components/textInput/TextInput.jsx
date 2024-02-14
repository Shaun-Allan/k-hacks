/* eslint-disable react/prop-types */

import { InputNumber, Select } from "antd";
import "./TextInput.css";
const { Option } = Select;

const TextInput = ({ input }) => {
  const selectAfter = (
    <Select
      style={{
        width: 60,
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
      <div className="textinput">
        <div>{input.prompt}</div>
        <div>
          <InputNumber
            className="inputnumber"
            addonAfter={selectAfter}
            defaultValue={100}
          />
        </div>
      </div>
    </>
  );
};

export default TextInput;
