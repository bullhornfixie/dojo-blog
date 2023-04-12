import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div classname="links">
        <Link href="/">Home</Link>
        <Link href="/create" style={{
          color: "black",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;

