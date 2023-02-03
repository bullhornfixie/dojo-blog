import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const [name, setName] = useState('mario')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
    console.log(id)

    // blog id will be passed to function when button is clicked
    // it will filter out this blog from array 
    // setBlogs will then be passed new filtered array 
  }

  useEffect(() => {
    setTimeout(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        setBlogs(data)
        setIsPending(false);
      })
      }, 1000)
  }, []);

  return (
    <div classname="home">
     { isPending && <div>Loading...</div>}
     {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
     {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />
     <button onClick={() => setName('luigi')}>change name</button> */}
     <p>{ name }</p>
    </div>
  );
}

export default Home; 

// Example of useState
// const [name, setName] = useState('mario');
// const [age, setAge] = useState(25);

// const handleClick = () => {
//   setName('luigi')
//   setAge(30)

