import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";

export const Seacrh = () => {
    const {show} = useContext(AlertContext)
    const onSubmit = (e) => {
        if(e.key === 'Enter'){
            show('This is alert!')
        }
    }
    return (
        <div className="form-group">
            <input type="text"
                   placeholder="Search your game"
                   className="form-control"
                    onKeyPress={onSubmit}
            />
        </div>
    );
}