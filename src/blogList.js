const BlogList = () => {
  return (
    <div classname="blog-list">
      {BlogList.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title}</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;