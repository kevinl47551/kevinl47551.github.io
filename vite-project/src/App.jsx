import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const Button = ({increase, label}) => {
    return (
      <button onClick = {increase}>
        {label}
      </button>
    )
}

const PillDisplay = ({pill1, pill2, pill3, pillHistory}) => {
  if (pillHistory.length === 0)
    return (
      <div>"No data collected yet"</div>
    )
  else
    return (
      <div>
        <div>pill1: {pill1}</div>
        <div>pill2: {pill2}</div>
        <div>pill3: {pill3}</div>
        <div>History: {pillHistory.join(" ")}</div>
      </div>
    )
}

function App() {
  const [pill1, setPill1] = useState(0);
  const [pill2, setPill2] = useState(0);
  const [pill3, setPill3] = useState(0);
  const [pillHistory, setPillHistory] = useState([]);

  const increasePill1 = () => {
    setPill1(pill1 + 1);
    setPillHistory(pillHistory.concat(1));
  }

  const increasePill2 = () => {
    setPill2(pill2 + 1);
    setPillHistory(pillHistory.concat(2));
  }

  const increasePill3 = () => {
    setPill3(pill3 + 1);
    setPillHistory(pillHistory.concat(3));
  }


  return (
    <div> 
      <Button increase={increasePill1} label="Pill1"/>
      <Button increase={increasePill2} label="Pill2"/>
      <Button increase={increasePill3} label="Pill3"/>
      <PillDisplay pill1={pill1} pill2={pill2} pill3={pill3} pillHistory={pillHistory}/>
    </div>
      
      
    
  )
}

export default App
