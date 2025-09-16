import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setCalVal("");
    } else if (value === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newVal = calVal + value;
      setCalVal(newVal);
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display display={calVal} />
        <Button onButtonClick={handleClick} />
      </div>
    </>
  );
}

export default App;
