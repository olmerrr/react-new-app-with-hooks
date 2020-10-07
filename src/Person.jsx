import React,{useState} from "react";
const Person = () => {
    const[ person, setPerson] = useState({
        name: 'Yaroslav',
        age: 29
    });
    setPerson((s)=> {
        return {
            ...person,
            age:33
        }
    })
    return (
        <p>1</p>
    );

}
export  default Person;