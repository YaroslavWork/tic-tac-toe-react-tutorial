import React from 'react'

const Square = ({ value }) => {
  function handleClick() {
    console.log("Square clicked with value:", value);
    alert(`Square clicked! Value: ${value}`);
  }

  return (
    <button
      className="square"
      onClick={handleClick}  
    >
      {value}
    </button>
  )
}

export default Square
