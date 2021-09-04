import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Another from './components/Another';

function App() {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/rooms" exact>
          </Route>
          <Route path="/another" exact>
            <Another/>
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;