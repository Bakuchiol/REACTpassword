import React from 'react'

function Website({onChange}) {
    return (
        <form className='inputs' onChange={onChange}>
            <input
            type="text"
            className='website'
            // placeholder='Website Name'
            />    
        </form>
      )
}

export default Website
