import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home.js';
import Entry from './Components/Entry.js';
import SelectedEntry from './Components/SelectedEntry'

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/Entry/:id"} exact component={SelectedEntry}/>
          <Route path={"/NewEntry"} exact component={Entry}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
