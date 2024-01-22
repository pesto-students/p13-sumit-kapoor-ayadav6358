import React from 'react';
import { useParams } from 'react-router-dom';
import blogPostsData from '../data/blogPosts.json';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPostsData.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
      {/* Add more details about the blog post */}
    </div>
  );
};

export default BlogDetail;
