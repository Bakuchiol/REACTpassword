import { useState, useEffect } from 'react';
import './App.css';
import Website from './components/Website';
import Password from './components/Password';
import Username from './components/Username';
// import Button from './components/Button';
// import Database from './components/Database';
// import Inputs from './components/Inputs';
// import Form from './components/Form';




function App() {
  const [website, setWebsite] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [data, setData] = useState([]);

  // for useEffect
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState('rgb(26, 118, 248)')
  const [accolor, setAcColor] = useState('#f5f5f5')

  const changeColor = () => {
    setColor('rgb(222, 173, 83)')
    changeAcc()
  }
  const changeAcc = () => {
    setAcColor('lightblue')
  }

  const storeData = () => {
    // if empty alert
    if (!website){
      alert('Website is empty')
      return
    }
    if (!password){
      alert('Password is empty')
      return
    }
    if (!username){
      alert('Username is empty')
      return
    }

    setData([...data, {website, username, password}])
    console.log(website)
    console.log(password)
    setWebsite('');
    setPassword('');
    setUserName('');

    // changeCount();
    changeColor()
  }

  // test remove 2
    const remove = (index) => {
    const array = data;
    array.splice(index, 1);
    setData([...array]);
  }

  // test effect
  // useEffect (() => {
  //   // setCount(count + 1)
  //   setWebsite(website[count])
  // }, [website, count])

  // const changeCount = () => {
  //   setCount(count + 1)
  // }

  // useEffect (() => {
  //   // setCount(count + 1) // infinite loop
  //   console.log('saved accounts', count)
  // }, [count])

  useEffect (() => {
    console.log('New Account')
    // let notif = document.querySelector('#notification')
    // notif.style.display = "block"
    let btn = document.querySelector('.btn')
    btn.style.backgroundColor = color
    let account = document.querySelector('.dataValues')
    account.style.backgroundColor = accolor
  })
  

  return (
    <div className="App">
      <h1 id="title">Password Manager</h1>
      <div className='topWrapper'>
        <h2>👋🏼 Hello, Customer</h2>
        <p id='notification'>You added a new account!</p>
        {/* <p>You have <span>{count}</span> accounts saved.</p> */}
      </div>
      {/* <Inputs /> */}
      {/* <Form /> */}
      <div id='mainWrapper'>
      <div className='inputBox'>
        <p id="label">Website</p>
        <Website
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        />

        <p id="label">Username/email address</p>
        <Username 
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        />

        <p id="label">Password</p>
        <Password
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        {/* <Button onClick={() => storeData()}/> */}
        <button
        type='submit'
        className='btn'
        onClick={() => storeData()}
        >Submit</button>
      </div>


      {/* data placeholders */}
      <div className='data'>
        <div className='dataValues'>
          <h4>Connected Account</h4>
          <h4>Username/email address</h4>
          <h4>Password</h4>
          <h4>DELETE</h4>
        </div>
      </div>

      {/* mapped values */}
      {
        data.map((element, idx) => {
          return (
            // <Database key={idx} name={element.website} email={element.password} index={idx}/>
            <div key={idx} className='submittedValues'>
              <h4>{element.website}</h4>
              <h4>{element.username}</h4>
              <h4>{element.password}</h4>
              <button className='deleteBtn' onClick={() => remove(idx)}>❌</button>
            </div>
            
          )
        })
      }
      </div>
    </div>
  );
}

export default App;