import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="mb-2 font-medium text-1g">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="LocationClickButton"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="London"
          title="London"
          name="LocationClickButton"
        />
        <InputField
          handleChange={handleChange}
          value="seattle"
          title="Seattle"
          name="LocationClickButton"
        />
        <InputField
          handleChange={handleChange}
          value="madrid"
          title="Madrid"
          name="LocationClickButton"
        />
        <InputField
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="LocationClickButton"
        />
        <InputField
          handleChange={handleChange}
          value="india"
          title="India"
          name="LocationClickButton"
        />
      </div>
    </div>
  );
};

export default Location;
