import React, { useState } from 'react'

function Passwords() {
    const [data, setData] = useState([]);
    const [website, setWebsite] = useState('');
    const [password, setPassword] = useState('');


    // function
    const storeData = (e) => {
        e.preventDefault();
        console.log(data)

        // store data ?? test
        setData([...data, {website, password}]);
        setWebsite('');
        setPassword('');


    }

  return (
    <form className='inputs' onSubmit={storeData}>
        <input
        type="text"
        className='website'
        placeholder='Website'
        onChange ={(e) => setData(e.target.value)}
        />

        <input type="text"
        className='password'
        placeholder='Password'
        onChange = {(e) => setData(e.target.value)}
        />

        <button type='submit' className='btn'>Submit</button>

    </form>
  )
}

export default Passwords
