import React from 'react'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-1g font-medium mb-2'>Location</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>
        </div>
    </div>
  )
}

export default Location