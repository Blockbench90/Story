import React from 'react';
import { Route, Switch} from 'react-router-dom'
import {SignIn} from "./pages/SingIn";
import Index from "./pages/Home";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/" component={Index}/>
        </Switch>
      </div>
  );
}

export default App;
