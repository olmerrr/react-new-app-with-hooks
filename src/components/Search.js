import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";

export const Seacrh = () => {
    const [value, setValue] = useState('');
    const {show} = useContext(AlertContext)
    const onSubmit = (event) => {

        if (event.key !== 'Enter') {
            return
        }
        if(value.trim()){
            console.log('Make request with: ', value)
        }else {
            show('Please, input name of your game')
        }
    }
    return (
        <div className="form-group">
            <input type="text"
                   placeholder="Search your game"
                   className="form-control"
                   onKeyPress={onSubmit}
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}