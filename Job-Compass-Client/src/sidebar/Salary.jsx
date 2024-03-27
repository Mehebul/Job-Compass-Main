import React from 'react'
import Button from './Button';
import InputField from '../components/InputField';

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
        <h4 className='mb-2 text-lg font-medium'>Salary</h4>
        <div className='mb-4'>
          <Button onClickHandler={handleClick} value="" title="Hourly"/>
          <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
          <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>

        </div>
        <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="SalaryClickButton"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30k"
          name="SalaryClickButton"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50k"
          name="SalaryClickButton"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80k"
          name="SalaryClickButton"
        />
          <InputField
            handleChange={handleChange}
            value={100}
            title="< 100k"
            name="SalaryClickButton"
          />
        </div>
    </div>
  )
}

export default Salary
