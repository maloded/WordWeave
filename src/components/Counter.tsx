import { useState } from "react"
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const inrement = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.btn}>
      <div>{count}</div>
      <button onClick={inrement}>
        increment
      </button>
    </div>
  );
};
