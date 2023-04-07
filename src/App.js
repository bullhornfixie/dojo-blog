import Navbar from './navbar';
import Home from './home';
import './index.css'; 

function App() {
  const title = 'welcome to the new blog';
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />        
      </div>
    </div>
  );
}

export default App;
