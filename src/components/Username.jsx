import React from 'react'

function Username({onChange}) {
    return (
        <form className='inputs' onChange={onChange}>
            <input
            type="text"
            className='website'
            // placeholder='Username/email'
            />    
        </form>
      )
}

export default Username
