// src/components/Blog.js
import React, { useState } from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 80px 20px; /* Adjusted padding to avoid navbar overlap */
  background-color: #390000; /* Background color for the blog page */
  color: white; /* Text color */
  min-height: 100vh; /* Full height to ensure it fills the page */
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center horizontally */
`;

const BlogPostWrapper = styled.div`
  background-color: black;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 80%; /* Adjust width as needed */
  display: flex; /* Flexbox for layout */
  align-items: center; /* Align items vertically in the center */
  gap: 20px; /* Space between image and content */
`;

const ImageWrapper = styled.div`
  flex-shrink: 0; /* Prevent image from shrinking */
`;

const PostImage = styled.img`
  width: 120px; /* Fixed width for images */
  height: 150px; /* Fixed height for images */
  border-radius: 10px; /* Rounded corners for images */
  object-fit: cover; /* Maintain aspect ratio and cover the area */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  flex: 1; /* Allow content to grow and fill available space */
`;

const PostFormWrapper = styled.div`
  background-color: black;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  width: 80%; /* Adjust width as needed */
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
`;

const FormButton = styled.button`
  background-color: #610000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #B22222;
  }
`;

const BlogPost = ({ post }) => (
  <BlogPostWrapper>
    <ImageWrapper>
      <PostImage src={post.image} alt={post.title} />
    </ImageWrapper>
    <ContentWrapper>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>by {post.author}</small>
    </ContentWrapper>
  </BlogPostWrapper>
);

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      title: 'The Great Gatsby Review',
      content: 'A captivating review of The Great Gatsby...',
      author: 'John Doe',
      image: 'https://via.placeholder.com/120x150', // Placeholder image URL
    },
    {
      title: 'Why You Should Read 1984',
      content: 'An insightful take on George Orwell\'s 1984...',
      author: 'Jane Smith',
      image: 'https://via.placeholder.com/120x150', // Placeholder image URL
    },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '', author: '', image: '' });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([newPost, ...posts]); // Add new post to the top
    setNewPost({ title: '', content: '', author: '', image: '' }); // Reset form
  };

  return (
    <BlogContainer>
      <h1>My Life, My Blog!</h1> {/* Heading centered */}
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}

      <PostFormWrapper>
        <h2>Submit Your Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="title"
            placeholder="Title"
            value={newPost.title}
            onChange={handleChange}
          />
          <FormTextArea
            name="content"
            placeholder="Content"
            rows="5"
            value={newPost.content}
            onChange={handleChange}
          />
          <FormInput
            type="text"
            name="author"
            placeholder="Author"
            value={newPost.author}
            onChange={handleChange}
          />
          <FormInput
            type="text"
            name="image"
            placeholder="Image URL"
            value={newPost.image}
            onChange={handleChange}
          />
          <FormButton type="submit">Submit</FormButton>
        </form>
      </PostFormWrapper>
    </BlogContainer>
  );
};

export default Blog;
