import React from 'react'
import '../../../styles/Label.css'

const Label = (props) => {
    return (
        <label className="fancy-input" {...props}>
            {props.children}
        </label>
    )
}

export default Label
