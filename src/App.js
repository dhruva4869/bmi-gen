import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const checkClick = () => {
    setIsClicked(true);
  }

  const personal = {
    fontFamily:'Verdana, sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#b584f4',
  };

  const headPers = {
    fontFamily: 'Georgia, sans-serif',
    color:'#f30fef',
    // paddingBottom:'20px',
  };

  const bgfont = {
    color:'white',
    opacity: isClicked ? 1 : 0.5,
  };

 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = ((weight * 100 * 100) / (height * height))
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 16.5) {
        setMessage('You are severly underweight')
      } 
      else if (bmi >= 16.5 && bmi < 18.5) {
        setMessage('You are slightly underweight')
      }
      else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are a healthy weight')
      } 
      else if (bmi >= 25 && bmi < 30) {
        setMessage('You are slightly overweight')
      }
      else if (bmi >= 30 && bmi < 35) {
        setMessage('You are a heavily overweight - obese')
      }
      else if (bmi >= 30 && bmi < 50) {
        setMessage('You are a extremely obese')
      }
      else {
        setMessage('What can I say? Take care of yourselves.')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h1 className='center' style = {headPers}>BMI Calculator</h1>
      <form onSubmit={calcBmi}>
 
        <div style = {personal}>
          <label>Weight (lbs)</label>
          <input value={weight} style = {bgfont} onClick = {checkClick} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div style = {personal}>
          <label>Height (in)</label>
          <input value={height} style = {bgfont} onClick = {checkClick} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn btn-primary' type='submit'>Submit</button>
          <button className='btn btn-primary' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center' style = {headPers}>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;