import { useState } from 'react';
import './App.css';
import Website from './components/Website';
import Password from './components/Password';
// import Button from './components/Button';
import Database from './components/Database';
// import Inputs from './components/Inputs';
// import Form from './components/Form';




function App() {
  const [website, setWebsite] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  const storeData = () => {
    setData([...data, {website, password}])
    console.log(website)
    console.log(password)
  }


  return (
    <div className="App">
      <h1>Password Manager</h1>
      {/* <Inputs /> */}
      {/* <Form /> */}
      <Website
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
      />

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

      <div className='data'>
        <div className='dataValues'>
          <h4>Website</h4>
          <h4>Password</h4>
          <h4>Remove</h4>
        </div>
      </div>

      {
        data.map((element, idx) => {
          return (
            <Database key={idx} name={element.website} email={element.password} index={idx}/>
          )
        })
      } index


    </div>


  );
}

export default App;