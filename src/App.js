import React from "react"
import './index.scss';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Profile} from "./pages/Profile";
import {Home} from  "./pages/Home";
import {About} from  "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact = "true" path = "/" component={Home}/>
                    <Route path = "/about" component={About}/>
                    <Route path = "/profile/:name" component={Profile}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;
