import React from "react"
import './index.scss';
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="container">
                Hello
            </div>
        </React.Fragment>
    )
};

export default App;
