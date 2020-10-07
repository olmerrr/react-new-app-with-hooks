import React, {useState} from 'react';

const Switcher = () => {
    const [color, setColor] = useState('white');
    const [fontSize, setFontSize] = useState('16')
    const darkMode = () => {
        setColor('black')
    };
    const lightMode = () => {
        setColor('white')
    };
    const setFloorFont = () => {
        setFontSize((state) => state - 2)
    };
    const setUpperFont = () => {
        setFontSize((state) => state + 2)
    };

    return (
        <div>
            <div style={{
                textAlign: 'center', padding: '10px',
                backgroundColor: color, fontSize: fontSize,
                border: '2px solid red'
            }}>
                <p>You can change color of this area</p>
                <button onClick={darkMode}>Dark Mode</button>
                <button onClick={setFloorFont}>-</button>
                <button onClick={lightMode}>Light Mode</button>
                <button onClick={setUpperFont}>+</button>

            </div>
        </div>
    );
}

export default Switcher;
