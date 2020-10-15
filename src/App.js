import React from "react"
import './index.scss';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Profile} from "./pages/Profile";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";

function App() {
    return (
        <AlertState>
            <BrowserRouter>
                <Navbar/>
                <div className="container">
                    <Alert alert={{text: 'Test Alert'}}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile/:name" component={Profile}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertState>
    )
};

export default App;
