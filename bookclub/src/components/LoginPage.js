import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import backgroundImage from '../assets/background.jpg'; // Correct path for the image

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage}); /* Add your background image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating the background image */
  color: black; /* Ensure text is black for better contrast */
  padding: 20px;
  box-sizing: border-box;
  perspective: 1000px; /* Perspective for the 3D effect */
`;

const FlipContainer = styled.div`
  width: 400px;
  height: 320px; /* Slightly increased height to fit all content */
  position: relative;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  transition: transform 0.6s;
`;

const Column = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column; /* Flex column direction */
  justify-content: space-between; /* Space between header and footer */
  padding: 15px; /* Reduced padding */
  box-sizing: border-box;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent white */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px); /* Apply blur effect similar to the navbar */
`;

const LoginColumn = styled(Column)`
  transform: rotateY(0deg);
`;

const SignUpColumn = styled(Column)`
  transform: rotateY(180deg);
`;

const Heading = styled.h2`
  font-size: 1.8em; /* Slightly reduced font size */
  margin-bottom: 15px; /* Reduced margin to create more space */
  text-align: center;
  color: white; /* Dark red heading color */
`;

const Input = styled.input`
  width: 100%;
  padding: 8px; /* Reduced padding for inputs */
  margin-bottom: 10px; /* Reduced margin to create more space */
  border: 1px solid darkred; /* Dark red border */
  border-radius: 5px;
  font-size: 1em;

  &:focus {
    border: 1px solid black; /* Focus border color */
    outline: none; /* Remove default outline */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: darkred; /* Dark red background */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-family: 'Georgia', 'Times New Roman', serif;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #B22222; /* Black background on hover */
    transform: translateY(-5px); /* Move upward on hover */
  }
`;

const LinkContainer = styled.div`
  text-align: center;
  font-size: 0.9em;
  color: White; /* Black color for the link container */
`;

const SignUpLink = styled(Link)`
  color: White;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: darkred; /* Dark red color on hover */
    transform: translateY(-5px); /* Move upward on hover */
  }
`;

const LoginPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSignUpClick = () => {
    setIsFlipped(true);
  };

  const handleLoginClick = () => {
    setIsFlipped(false);
  };

  return (
    <LoginPageContainer>
      <FlipContainer isFlipped={isFlipped}>
        <LoginColumn>
          <Heading>Login</Heading>
          <form>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Login</Button>
          </form>
          <LinkContainer>
            Don't have an account? <SignUpLink to="#" onClick={handleSignUpClick}>Sign up</SignUpLink>
          </LinkContainer>
        </LoginColumn>
        <SignUpColumn>
          <Heading>Sign Up</Heading>
          <form>
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Sign Up</Button>
          </form>
          <LinkContainer>
            Already have an account? <SignUpLink to="#" onClick={handleLoginClick}>Login</SignUpLink>
          </LinkContainer>
        </SignUpColumn>
      </FlipContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
