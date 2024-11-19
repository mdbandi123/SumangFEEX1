import React from "react";

export default function Menu({displayCalc, displayBookstore}){
  return(
    <section>
      <div>
        <button onClick={displayCalc}>Calculator</button>
        <button onClick={displayBookstore}>Bookstore</button>
      </div>
    </section>
  )
}