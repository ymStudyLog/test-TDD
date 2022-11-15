import React from 'react';

const Counter = () => {
  const [number, setNumber] = React.useState(0);

  const increase = React.useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const decrease = React.useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return(
    <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
};

export default Counter;
