import React from 'react';
import { Link } from 'react-router-dom';
import blogPostsData from '../data/blogPosts.json';

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      {blogPostsData.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.preview}</p>
          <img src={post.image} alt={post.title} />
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
