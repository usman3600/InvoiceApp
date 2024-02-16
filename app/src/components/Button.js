import React from 'react'
const Button = ({name, func, variant, width}) => {
  return (
    <div className='buttoncontainer'>
        <button style={{width:{width}}} type='button' onClick={func}>{name}</button>
    </div>
  )
}

export default Button