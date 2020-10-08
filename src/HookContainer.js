import React, {useState,useEffect} from "react";
const HookContainer = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
       const timeOut = setTimeout(() => setVisible(false), 2500);
        return () => clearTimeout(timeOut)
    },[])
    if(visible){
        return(
        <div>
                <p>Hello Yaroslav</p>
        </div>
    )}
};
export default HookContainer;