import { useState } from 'react';
import BlogList from './blogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
    console.log(id)

    // blog id will be passed to function when button is clicked
    // it will filter out this blog from array 
    // setBlogs will then be passed new filtered array 
  }

  return (
    <div classname="home">
     <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> 
     <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />
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

