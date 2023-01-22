import { useState } from 'react';
import BlogList from './blogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
  ]);

  console.log(blogs)

  return (
    <div classname="home">
     <BlogList blogs={blogs} title="All Blogs"/>
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

