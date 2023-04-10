import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
     setTimeout(() => { 
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setBlogs(data)
        setIsPending(false)
      });
    }, 1000)
  }, []);
    
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div classname="home">
      { isPending && <div>Loading...</div> }
     {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
    </div>
  );
}

export default Home; 



