import { useParams } from "react-router-dom"

const BlogDetails = () => {
  const { id } = useParams();
  // this function grabs paramaters from route 

  return (
    <div className="blog-details">
      <h2>Blog Details - { id }</h2>
    </div>
  );
}

export default BlogDetails;