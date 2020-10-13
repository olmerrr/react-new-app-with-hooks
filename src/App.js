import React, {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);


    if (visible) {
        return (
            <div>
                <button onClick={() => setValue(v => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>hide</button>
                {/*<HookCounter value={value}/>*/}
                {/*<Notification/>*/}
                <PlanetInfo id = {value}/>
            </div>
        )
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }

};

const getPlanet = (id) => {
    return fetch(`http://swapi.dev/api/planets/${id}/`)
        .then((res) => res.json())
        .then(data => data);
};
const useRequest = (request) => {
    const [dataState, setDataState] = useState(null);
    useEffect(() =>{
        let cancelled = false;
        request()
            .then(data => !cancelled && setDataState(data))
        return () => cancelled = true;
    },[request]);
    return dataState;
};
const usePlanetInfo = (id) => {
    const request = () => getPlanet(id);
    return useRequest(request);
}
const PlanetInfo = ({id}) => {
    const data = usePlanetInfo(id);
    return <p>{id} - {data && data.name}</p>
};

// const HookCounter = ({value}) => {
//     useEffect(() => {
//         console.log('mount');
//         return () => console.log('unmount');
//     },[]);
//     useEffect(() => console.log('update'));
//     return <p>{value}</p>
// };
// const Notification = () => {
//     const [visible,setVisible] = useState(true);
//
//     useEffect( () =>{
//       const timeOut = setTimeout(()=>
//             setVisible(false),2500);
//       return () => clearTimeout(timeOut);
//     },[]);
//
//     if(visible){
//         return(
//             <p>Hello</p>
//         )
//     };
//
// }
export default App;
