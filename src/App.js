import React, {useContext} from 'react';
import Switcher from "./Switcher";

function App() {
    const MyContext = React.createContext();
    const Child = () => {
    const value = useContext(MyContext);
    return <h2>{value}</h2>
    };

  return (
    <div className="App">
          {/*<Switcher/>*/}
          <MyContext.Provider value="this is useContext() Hook baby">
              <Child/>
          </MyContext.Provider>
    </div>
  );
}

export default App;
