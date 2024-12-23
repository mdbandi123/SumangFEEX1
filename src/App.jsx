import { useState } from 'react'
import './App.css'
import Menu from './pages/Menu/Menu';
import Calculator from './pages/Calculator/Calculator';
import Bookstore from './pages/Bookstore/Bookstore';

function App() {
  const [screen,setScreen] = useState("menu");

  const handleDisplayCalculator = () => {
    setScreen("calculator");
  }

  const handleDisplayBookstore = () => {
    setScreen("bookstore");
  }

  const handleDisplayMenu = () => {
    setScreen("menu");
  }

  return (
    <>
    {
      screen === "menu" 
      ? <Menu displayCalc={handleDisplayCalculator} displayBookstore={handleDisplayBookstore}/> 
      : (screen === "calculator" 
        ? <Calculator back={handleDisplayMenu}/> 
        : <Bookstore back={handleDisplayMenu}/>)
    }
    </>
  )
}

export default App

