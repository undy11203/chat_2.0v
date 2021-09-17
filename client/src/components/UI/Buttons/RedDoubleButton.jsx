import React from 'react'
import '../../../styles/DoubleBButton.css'

const RedDoubleButton = (props) => {
    return (
        <button className='double-border-button red' {...props}>
            {props.children}
        </button>
    )
}

export default RedDoubleButton

