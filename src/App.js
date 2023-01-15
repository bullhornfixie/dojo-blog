import './App.css';
import Navbar from './navbar';
import Home from './home';

// home page 

function App() {
  const title = 'welcome to the new blog';
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>This blog is about ninjas</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
