import React from 'react'

function Database({website, username, password, index}) {
  return (
    <div className='dataValues'>
          <h4>{website}</h4>
          <h4>{username}</h4>
          <h4>{password}</h4>
          <h4>Remove</h4>
    </div>
  )
}

export default Database
