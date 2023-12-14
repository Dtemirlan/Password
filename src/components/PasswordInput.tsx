import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setCorrect, setMessage, selectPassword } from '../features/passwordSlice';
import './PasswordInput.css';

const PasswordInput: React.FC = () => {
    const dispatch = useDispatch();
    const { input, isCorrect, message, isIncorrectInput } = useSelector(selectPassword);

    const handleButtonClick = (value: string) => {
        if (value === '<') {
            if (input.length > 0) {
                dispatch(setInput(input.slice(0, -1)));
            }
        } else if (value === 'E') {
            if (input === '1337') {
                dispatch(setCorrect(true));
                dispatch(setMessage('Доступ разрешен'));
            } else {
                dispatch(setCorrect(false));
                dispatch(setMessage('Доступ запрещен'));
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
                    {/* Отображаем цифры введенного пароля */}
                    {input.split('').map((digit, index) => (
                        <span key={index} className={digitClass}>
              {digit}
            </span>
                    ))}
                </div>
                <div className="invalid-feedback">Неправильный ввод</div>
                <div className="valid-feedback">Верный ввод</div>
            </div>
            <div className="button-container">
                {/* Отображаем кнопки для ввода цифр и управления паролем */}
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<', 'E'].map((button) => (
                    <button key={button} className="btn btn-secondary button" onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
            {/* Отображаем сообщение о результате ввода пароля */}
            <div className={`message ${isCorrect ? 'text-success' : 'text-danger'}`}>{message}</div>
        </div>
    );
};

export default PasswordInput;