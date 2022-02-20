import React, { useRef } from 'react'
import './calckeys.css'

export default function CalcKeys(props) {
    return (
        <div className="calculator__keys">
            <button onClick={props.ShowResultOnDisplay} className='operator plus' name='+'>&#43;</button>
            <button onClick={props.ShowResultOnDisplay} className='operator minus' name='−'>&minus;</button>
            <button onClick={props.ShowResultOnDisplay} className='operator times' name='×'>&times;</button>
            <button onClick={props.ShowResultOnDisplay} className='operator divide' name='÷'>&divide;</button>
            <button onClick={props.ShowResultOnDisplay} className='number one' name='1'>1</button>
            <button onClick={props.ShowResultOnDisplay} className='number two' name='2'>2</button>
            <button onClick={props.ShowResultOnDisplay} className='number three' name='3'>3</button>
            <button onClick={props.ShowResultOnDisplay} className='number four' name='4'>4</button>
            <button onClick={props.ShowResultOnDisplay} className='number five' name='5'>5</button>
            <button onClick={props.ShowResultOnDisplay} className='number six' name='6'>6</button>
            <button onClick={props.ShowResultOnDisplay} className='number seven' name='7'>7</button>
            <button onClick={props.ShowResultOnDisplay} className='number eight' name='8'>8</button>
            <button onClick={props.ShowResultOnDisplay} className='number nine' name='9'>9</button>
            <button onClick={props.ShowResultOnDisplay} className='number zero' name='0'>0</button>
            <button onClick={props.ShowResultOnDisplay} className='number decimal' name='.'>.</button>
            <button onClick={props.ShowResultOnDisplay} className='C clear' name='C'>&#67;</button>
            <button onClick={props.ShowResultOnDisplay} className='equal' name='='>&#61;</button>
        </div>
    )
}
