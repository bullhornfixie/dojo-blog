import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'amay new website', body: 'lorem ipsum', author: 'mario', id: 1},
    { title: 'welcome party', body: 'loerem ipsum', author: 'yoshi', id: 2},
    { title: 'web dev top tips', bod: 'lorem ipsum', author: 'mario', id: 3}
  ]);
 

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div classname="home">
     <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home; 



