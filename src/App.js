import Navbar from './navbar';
import Home from './home';
import './index.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

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
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>      
        </div>
      </div>
    </Router>
  );
}

// when you visit "/" direct to <Home> comoponent
// when you visit "create" direct to <Create> component

export default App;
