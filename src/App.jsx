import React, { useEffect, useRef, useState } from "react";

const OTP_DIGITS_COUNT = 5;
function App() {
  const [inputArray, setInputArray] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  console.log(inputArray);
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0].focus();
  }, []);

  const handleChange = (value, index) => {
    console.log(value, index);
    // inputArray[index] = value
    // console.log(inputArray)
    if (isNaN(value)) {
      return;
    }

    const newArr = [...inputArray];
    const newValue = value.trim();
    newArr[index] = newValue.slice(-1);
    setInputArray(newArr);

    newValue &&  refArr.current[index+1].focus();
  };

  const handleKeyDown = (e, index)=>
  {
    if(!e.target.value  && e.code ==='Backspace')
    {
      refArr.current[index-1].focus();
    }

  }
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
          ref={(el) => (refArr.current[index] = el)}
          onKeyDown={(e)=> handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}

export default App;
