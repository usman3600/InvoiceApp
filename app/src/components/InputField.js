import React from 'react'

const InputField = ({label, placeholder}) => {
  return (
    <div className='inputfeildcontainer'>
        <label>{label}</label>
        <input placeholder={placeholder}/>
    </div>
  )
}

export default InputField