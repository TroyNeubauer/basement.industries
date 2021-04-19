import './App.css';
import Navbar from './components/navbar';
import Weld from './components/weld';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Weld></Weld>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;

