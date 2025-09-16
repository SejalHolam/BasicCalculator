import styles from "./Display.module.css";

function Display (){
return(
    <>
      <input type="text" className={styles.display} value={display} readOnly />
    </>
)
}
export default Display
