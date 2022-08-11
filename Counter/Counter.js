import { useState } from "react";

function Counter() {
  
    const [count, setCount] = useState(0);
    const Increase = () => {
        setCount(count + 1);
    }
    const Decrease = () => {
        setCount(count - 1);
    }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button type="button" className="btn btn-danger" onClick={Decrease}>Decrease</button>
      <button type="button" className="btn btn-success" onClick={Increase}>Increase</button>
    </div>
  );
}

export default Counter;
