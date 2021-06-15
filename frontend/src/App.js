import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home.js';
import Entry from './Components/Entry.js';
import ListedEntry from './Components/ListedEntry'

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/Entry/:id"} exact component={ListedEntry}/>
          <Route path={"/NewEntry"} exact component={Entry}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
