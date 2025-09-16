import styles from "./Button.module.css";

function Button({ onButtonClick }) {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttoncontainer}>
        {buttons.map((button) => (
          <button
            className={styles.button}
            key={button}
            onClick={() => onButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </>
  );
}
export default Button;
