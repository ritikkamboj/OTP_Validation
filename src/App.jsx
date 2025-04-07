import React, { useState } from "react";

const OTP_DIGITS_COUNT = 5;
function App() {
  const [inputArray, setInputArray] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  console.log(inputArray);

  const handleChange = (value, index) => {
    console.log(value, index);
    // inputArray[index] = value
    // console.log(inputArray)
    if(isNaN(value))
    {
      return;
    }

    const newArr = [...inputArray];
    newArr[index] = value;
    setInputArray(newArr);
  };
  return (
    <div className="app">
      <h1>OTP Validator </h1>

      {inputArray.map((input, index) => (
        <input
          className="otp-input"
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value, index)}
        />
      ))}
    </div>
  );
}

export default App;
