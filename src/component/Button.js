import React from 'react'

const Button = (props) => {

 

    return (
        <div>
             <button type={props.type} value={props.value} style={{backgroundColor:props.color}} onClick={props.onClick} className='btn'>{props.text}</button>
        </div>
    )
}

export default Button
