import React, { useState } from "react";

const Button = () => {
  const [name, setName] = useState(0);

  const handleclickplus = () => {
    setName(name + 1);
  };

  const handleclickminus = () => {
    setName(name - 1);
  };

  return (
    <div>
      <h1 className="cal">{name}</h1>
      <button onClick={handleclickplus}>increment</button>
      <button onClick={handleclickminus}>decrement</button>
    </div>
  );
};

export default Button;
