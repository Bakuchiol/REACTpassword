import React from 'react'

function Password({onChange}) {
    return (
        <form className='inputs' onChange={onChange}>
            <input
            type="text"
            className='website'
            placeholder='Password'
            />    
        </form>
      )
}

export default Password
