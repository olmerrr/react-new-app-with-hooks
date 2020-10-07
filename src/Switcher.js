import React, {useState} from 'react';

const Switcher = () => {
    const [color, setColor] = useState('white');
    const [fontSize, setFontSize] = useState(14);

    const darkMode = () => {
        setColor('black')
    };
    const lightMode = () => {
        setColor('white')
    };
    const fontFloor = () => {
        setFontSize((state) => state - 2)
    };
    const fontUp = () => {
        setFontSize((state) => state + 2)
    };
    return (
        <div>
            <button onClick={darkMode}>Dark mode</button>
            <button onClick={lightMode}>Light mode</button>
            <button onClick={fontFloor}>-</button>
            <button onClick={fontUp}>+</button>
            <div style={{
                padding: '10px',
                backgroundColor: color,
                fontSize: fontSize
            }}>You can change background
            </div>
        </div>
    );
}

export default Switcher;
