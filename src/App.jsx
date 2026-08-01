import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };
console.log(input);

const handleClick=()=>{
  if(input.trim()===''){
    document.getElementById('result').innerText='Please enter a number';
  }else if(isNaN(input)){
    document.getElementById('result').innerText='Not a valid number!';
  }else{
    const number = parseInt(input);
    if (number % 2 === 0) {
      document.getElementById('result').innerText=`The number ${number} is even!`;
    } else {
      document.getElementById('result').innerText=`Oops, ${number} is odd!`;
    }
  }
}


  return (
    <>
    <div className="outer-container">
<div className="inner-container">
<h2>Even or Odd Checker</h2>
<input style={{padding:'5px', margin: '10px', width: '250px', display: 'block', margin: '0 auto',border:'1px solid #ccc', marginBottom:'5px',borderRadius:'5px'}} type="text" onChange={handleChange} placeholder="Enter a number" />
<button style={{padding:'5px', margin: '10px', width: '265px', background:'blue',color:'white', border:'none', borderRadius:'5px', display: 'block', margin: '0 auto', marginBottom:'5px'}} onClick={handleClick}>Check</button>
<p id="result"></p>
</div>
    </div>
     
    </>
  )
}

export default App
