import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home.js';
import Entry from './Components/Entry.js';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/Home"} exact component={Home}/>
          <Route path={"/Entry"} exact component={Entry}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
