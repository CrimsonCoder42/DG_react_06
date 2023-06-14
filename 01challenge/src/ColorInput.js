import React from 'react'

const ColorInput = ({handleColorChange}) => {
  
  return (
    <input type="text" placeholder='add color name' onChange={handleColorChange}/>
  )
}

export default ColorInput