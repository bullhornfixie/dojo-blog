const BlogList = (props) => {
  // pass array object component to blog via props 
  const blogs = props.blogs;
  const title = props.title;
  console.log(title)

  return (
    <div classname="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;