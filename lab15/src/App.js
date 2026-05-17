import './App.css';
import { useState } from 'react';

function App() {
  // const[name, setName] = useState("") <- handles one input value
  const[inputs, setinputs] = useState({})

  const submitform = function(e){
    e.preventDefault()
    alert(`Entered name = ${inputs.username}\nAge = ${inputs.age}\nComments = ${textcomment}\nPassword = ${inputs.password}\nGender = ${gender}`)
  }

  const handleinputs = function(e){
    const name = e.target.name
    const value = e.target.value
    setinputs(values =>({...values, [name]:value}))
  }

  // TEXT AREA
  const [textcomment, setTextcomment] = useState("")
  const submitcomment = function(e){
    setTextcomment(e.target.value)
  }

  // SELECT
  const [gender, selectgender] = useState("")
  const selectedgender = function(e){
    selectgender(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={submitform}>
        <fieldset>
          <legend>Forms in ReactJS</legend>
          <div className='formcontrol'>
            <label for="username">Enter a name: </label>
            <input 
            type='text' 
            id='username'
            name='username'
            value = {inputs.username}
            onChange={handleinputs}
            />
          </div>

          <div className='formcontrol'>
            <label for="age">Enter an age: </label>
            <input 
            type='number' 
            id='age'
            name='age'
            value = {inputs.age}
            onChange={handleinputs}
            />
          </div>

          <div className='formcontrol'>
            <label for="comments">Any suggestions? </label>
            <textarea
              id='comments'
              value={textcomment}
              onChange={submitcomment}
            />
          </div>

          <div className='formcontrol'>
            <label for="name">Enter a password: </label>
            <input 
            type='text' 
            id='password'
            name='password'
            value = {inputs.password}
            onChange={handleinputs}
            />
          </div>

          <div className='formcontrol'>
            <label for="g">Select a gender: </label>
            <select value={gender} onChange={selectedgender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

        </fieldset>

        <div className='formcontrol'>
          <button type='submit'>Submit Form</button>
        </div>
      </form>
      <p>Name = {inputs.username}</p>
      <p>Age = {inputs.age}</p>
      <p>Comments = {textcomment}</p>
      <p>Password = {inputs.password}</p>
      <p>Gender = {gender}</p>
    </div>
  );
}

export default App;
