import React from "react";
import styles from "./Menu.module.css";

export default function Menu({displayCalc, displayBookstore}){
  return(
    <section className={styles.mainCont}>
      <div className={styles.buttonCont}>
        <button className={styles.button} onClick={displayCalc}>Calculator</button>
        <button className={styles.button} onClick={displayBookstore}>Bookstore</button>
      </div>
    </section>
  )
}