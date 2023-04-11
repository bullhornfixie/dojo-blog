import Navbar from './navbar';
import Home from './home';
import './index.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  const title = 'welcome to the new blog';
  const link = 'http://www.google.com';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>      
        </div>
      </div>
    </Router>
  );
}

// when you visit "/" direct to <Home> comoponent

export default App;
