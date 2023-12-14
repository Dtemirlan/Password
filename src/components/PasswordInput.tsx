import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, clearInput, setCorrect, setMessage, selectPassword } from '../features/passwordSlice';
import './PasswordInput.css';

const PasswordInput: React.FC = () => {
    const dispatch = useDispatch();
    const { input, isCorrect, message, isIncorrectInput } = useSelector(selectPassword);

    const handleButtonClick = (value: string) => {
        if (value === '<') {
            dispatch(clearInput());
        } else if (value === 'E') {
            if (input === '1337') {
                dispatch(setCorrect(true));
                dispatch(setMessage('Access Granted'));
            } else {
                dispatch(setCorrect(false));
                dispatch(setMessage('Access Denied'));
            }
        } else if (input.length < 4) {
            dispatch(setInput(input + value));
        }
    };

    const digitClass = isIncorrectInput ? 'digit incorrect' : 'digit correct';

    return (
        <div className="password-container">
            <div className="input-container">
                <div className="digits-container">
                    {input.split('').map((digit, index) => (
                        <span key={index} className={digitClass}>
              {digit}
            </span>
                    ))}
                </div>
                <div className="invalid-feedback">Incorrect input</div>
                <div className="valid-feedback">Correct input</div>
            </div>
            <div className="button-container">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<', 'E'].map((button) => (
                    <button key={button} className="btn btn-secondary button" onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
            <div className={`message ${isCorrect ? 'text-success' : 'text-danger'}`}>{message}</div>
        </div>
    );
};

export default PasswordInput;
