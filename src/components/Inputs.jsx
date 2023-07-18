import React, { useState } from 'react'

function Inputs() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // clear input after submission
        setName('');
        setPassword('');
        console.log('WORKING?')
        console.log(name)
        console.log(password)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
          {/* hmtlFor: pass id of input (in this case, name) :: connect id to input */}
            <label htmlFor='name'>Website:</label>
            <input
            id='name'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e =>{setName(e.target.value)}}
            />

            <label htmlFor='name'>Password:</label>
            <input
            id='name'
            type='text'
            placeholder='Password'
            name='name'
            value={password}
            onChange={e =>{setName(e.target.value)}}
            />

            <button type='submit'>Submit</button>

          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Inputs
