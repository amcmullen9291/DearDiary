import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home.js';
import Entry from './Components/Entry.js';
import ShowEntry from './Components/ShowEntry'

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/NewEntry"} exact component={Entry}/>
          <Route path={"/:id"} exact component={ShowEntry}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
