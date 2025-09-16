import styles from "./Display.module.css";

function Display (){
return(
    <>
      <input type="text" className={styles.display} readOnly value={display} />
    </>
)
}
export default Display
