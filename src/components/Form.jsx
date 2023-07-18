import React, { useState } from 'react'
import Passwords from './Passwords'

function Form() {
    // empty for storage
    const [manager, setManager] = useState([])

    // function to store data
    const manageData = (manager) => {
        setManager([...manager, ])
    }

  return (
    <div className='wrapper'>
      <Passwords manageData={manageData}/>
    </div>
  )
}

export default Form
