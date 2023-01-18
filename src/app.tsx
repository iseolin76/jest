import React from "react";

const App: React.FC = () => {
  const [number, setNumber] = React.useState<number>(0);

  return (
    <div>
      <h2>Hello. Jest!!</h2>
      <h4>number: {number}</h4>
      <button type="button" onClick={() => setNumber(number + 1)}>
        증가
      </button>
      <button type="button" onClick={() => setNumber(number - 1)}>
        감소
      </button>
    </div>
  );
};

export default App;
