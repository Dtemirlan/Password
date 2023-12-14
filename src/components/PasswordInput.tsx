// src/components/PasswordInput.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, clearInput, setCorrect, setMessage, selectPassword } from '../features/passwordSlice';

const PasswordInput: React.FC = () => {
    const dispatch = useDispatch();
    const { input, isCorrect, message } = useSelector(selectPassword);

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

    const inputClass = isCorrect ? 'input-display' : 'input-display incorrect';

    return (
        <div className="password-container">
            <div className="input-container">
                <input className={inputClass} type="text" value={input} readOnly />
            </div>
            <div className="button-container">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<', 'E'].map((button) => (
                    <button key={button} className="btn btn-secondary button" onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
            <div style={{ color: isCorrect ? 'green' : 'red' }}>{message}</div>
        </div>
    );
};

export default PasswordInput;
