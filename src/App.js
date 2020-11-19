import React from 'react';
import { Route, Switch} from 'react-router-dom'
import {SignIn} from "./pages/SingIn";
import Home from "./pages/Home";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/" component={SignIn} exact/>
          <Route path="/home" component={Home}/>
        </Switch>
      </div>
  );
}

export default App;
