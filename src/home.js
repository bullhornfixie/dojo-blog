import { useState, useEffect } from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div classname="home">
      { error && <div> { error } </div> }
      { isPending && <div>Loading...</div> }
     {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home; 



