import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
    const [expression, setExpression] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                const calculatedResult = eval(expression);
                setResult(calculatedResult.toString());
            } catch (error) {
                setResult('Ошибка');
            }
        } else if (value === 'C') {
            setExpression('');
            setResult(null);
        } else if (value === '<') {
            // Удаляем последний символ из выражения
            setExpression((prevExpression) => prevExpression.slice(0, -1));
            setResult(null);
        } else {
            setResult(null);
            setExpression((prevExpression) => prevExpression + value);
        }
    };

    return (
        <div className="calculator-container">
            <h2>Calculator</h2>
            <div className="display">
                {result !== null ? <div className="result">{result}</div> : <div className="expression">{expression}</div>}
            </div>
            <div className="btns-container">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '<', 'C', '+', '='].map((button) => (
                    <button key={button} className="btn btn-secondary button" onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
