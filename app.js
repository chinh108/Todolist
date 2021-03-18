import React from 'react';
import './app.css';
import AccountAction from './tep2/AccAction/AccAction';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './tep1/Homepage/home';  
import history from './history/history';

function App() {
  // const history = createBrowserHistory({forceRefresh: true});
  return (
    <Router history={history}>
        <div className="App"> 
          <Switch>
            <Route path="/account" component={AccountAction}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;