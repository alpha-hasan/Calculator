import React, { useState } from 'react'
import './display.css';

export default function Display(props) {
    return (
        <div className="calculator__display" >{props.result}</div>
    )
}
