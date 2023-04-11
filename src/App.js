import Navbar from './navbar';
import Home from './home';
import './index.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = 'welcome to the new blog';
  const link = 'http://www.google.com';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />        
        </div>
      </div>
    </Router>
  );
}

export default App;
