import { useState } from 'react';
import './App.css';

// example 1
// making controlled forms in REACT
function App() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    // clear input after submission
    setName('');
    console.log('WORKING?')
    console.log(name)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
          {/* hmtlFor: pass id of input (in this case, name) :: connect id to input */}
            <label htmlFor='name'>Name:</label>
            <input
            id='name'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e =>{setName(e.target.value)}}
            />
          </div>
          {/* disabled={!name} : cannot submit if there's no name */}
          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;