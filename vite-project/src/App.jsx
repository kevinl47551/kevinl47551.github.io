import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const Button = ({change, label}) => {
    return (
      <button className='w-full border-2 border-black bg-amber-500' onClick = {change}>
        {label}
      </button>
    )
}

const SinglePillDisplay = ({pill, setPill, pillsTaken, setPillsTaken}) => {
  const takePill = (pill, setPill) => {
    if (pill.amt === 0) return;

    setPill({...pill, amt: pill.amt-1});
    setPillsTaken(pillsTaken + 1);
  }

  const refillPill = (pill, setPill) => {
    console.log(typeof(pill.refill));
    setPill({...pill, amt: pill.amt + pill.refill});
  }

  return (
    <div className='border-2 border-amber-300 shadow-2xs'>
      {pill.amt <= 5 
        ? <div className='bg-red-600'>{pill.name}: {pill.amt}</div> 
        : <div className='bg-green-500'>{pill.name}: {pill.amt}</div>
      }

      <Button 
        change={() => takePill(pill, setPill)}
        label="take"
      />

      <Button
        change={() => refillPill(pill, setPill)}
        label="refill"
      />
    </div>
  );
}

const PillsTakenDisplay = ({pillsTaken}) => {
  if (pillsTaken === 0)
    return (
      <div>No pills taken yet</div>
    )
  else
    return (
      <div>
        <div>total: {pillsTaken}</div>
      </div>
    )
}

function App() {
  const [pill1, setPill1] = useState({name:"med1", amt:30, refill: 30});
  const [pill2, setPill2] = useState({name:"med2", amt:60, refill: 60});
  const [pill3, setPill3] = useState({name:"med3", amt:30, refill: 30});
  const [pillsTaken, setPillsTaken] = useState(0);

  return (
    <div className='text-black'>
      <div className='flex justify-center gap-3'>
        <SinglePillDisplay pill={pill1} setPill={setPill1} pillsTaken={pillsTaken} setPillsTaken={setPillsTaken}/>
        <SinglePillDisplay pill={pill2} setPill={setPill2} pillsTaken={pillsTaken} setPillsTaken={setPillsTaken}/>
        <SinglePillDisplay pill={pill3} setPill={setPill3} pillsTaken={pillsTaken} setPillsTaken={setPillsTaken}/>
      </div> 
      
      <PillsTakenDisplay pillsTaken={pillsTaken}/>
    </div>
      
      
    
  )
}

export default App
