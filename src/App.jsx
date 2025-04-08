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

    if (index < OTP_DIGITS_COUNT - 1) {
      newValue && refArr.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // console.log(e.key)
    if (!e.target.value && e.key === "Backspace" && index > 0) {
      refArr.current[index - 1].focus();
    }
    else if(e.key === "ArrowLeft" && index >0)
    {
      refArr.current[index - 1].focus();

    }
    else if(e.key=== "ArrowRight" && index < OTP_DIGITS_COUNT-1 )
    {
      refArr.current[index + 1].focus();
    }
    
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
          ref={(el) => (refArr.current[index] = el)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}

export default App;
