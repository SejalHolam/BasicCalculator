import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <Button />
      </div>
    </>
  );
}

export default App;
