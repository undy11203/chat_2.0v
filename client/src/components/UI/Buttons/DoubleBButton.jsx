import React from 'react'
import '../../../styles/DoubleBButton.css'

const DoubleBButton = (props) => {
    return (
        <button className='double-border-button' {...props}>
            {props.children}
        </button>
    )
}

export default DoubleBButton
