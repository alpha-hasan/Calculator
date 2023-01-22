import React, { useState } from 'react'
import './calculator.css'
import Display from './display/Display'
import CalcKeys from './calKeys/CalcKeys'

export default function Calculator() {

    const operators = ['+', '−', '×', '÷'];
    const [result, setResult] = useState('0');
    const [tempResult, setTempResult] = useState('');
    console.log(`result : ${result}`);
    console.log(`Temp result : ${tempResult}`);
    const ShowResultOnDisplay = (key) => {

        // Clear Display

        if (key.target.name === 'C') {
            setResult('0');
        }

        // All the crap after equals button is pressed

        if (tempResult && operators.includes(key.target.name) && !operators.includes(result.charAt(result.length - 1))) {
            console.log('here');
            setResult(tempResult + key.target.name);
        }

        // Checking if It's a digit / decimal

        if (!operators.includes(key.target.name) && key.target.name !== 'C' && key.target.name !== '=') {

            // Limiting the amount of numbers the user can type or get as a result

            if (result.length > 16 || tempResult.length > 16) {
                alert("Limit Reached! You Can't add more than 17 numbers");
            }

            // limiting the amount of decimals the user can type + decimal fix after equals button is pressed

            else if (key.target.name === '.' && result !== '0' && result !== '' && result.charAt(result.length - 1) !== '.' && !operators.includes(result.charAt(result.length - 1))) {
                setResult(result + key.target.name);
            }

            // Logic that's adding numbers to the display

            else if (key.target.name !== '.') {
                (result !== '0') ? setResult(result + key.target.name) : setResult(key.target.name);
            }
        }

        // Listening to an Operator:
        // Checking to see if
        // the result is 0
        // it's a new calculation after equals button is pressed
        // it's an operator
        // the last character is an operator
        // the last character is a decimal

        if (result !== '0' && result !== '' && operators.includes(key.target.name) && !operators.includes(result.charAt(result.length - 1)) && result.charAt(result.length - 1) !== '.') {
            setResult(result + key.target.name);
        }

        // Listening to Equal sign:
        // Checking to see if
        // the result is 0
        // the equation includes an operator
        // the last character is an operator
        // the last character is a decimal

        if (key.target.name === '=') {
            for (let i = 0; i < result.length; i++) {
                if (result !== '0' && operators.includes(result[i]) && !operators.includes(result.charAt(result.length - 1)) && result.charAt(result.length - 1) !== '.') {
                    console.log('here');
                    let equation = result;
                    equation = equation.replace(/−/g, '-');
                    equation = equation.replace(/×/g, '*');
                    equation = equation.replace(/÷/g, '/');
                    setTempResult((eval(equation).toString()));
                    setResult('');
                }
            }
        }
    }

    return (
        <div className='calculator'>
            <Display result={result} tempResult={tempResult} />
            <CalcKeys ShowResultOnDisplay={ShowResultOnDisplay} />
        </div>
    )
}