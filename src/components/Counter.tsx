import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className={styles.btn}
        onClick={() => setCount((count) => count + 1)}
      >
        Counter
      </button>
      <p>{count}</p>
    </>
  );
};

export default Counter;
