import React, { useState } from 'react';
import styled from 'styled-components';
import background1 from '../assets/background1.jpg';
import { Link } from 'react-router-dom'; // Import Link

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url(${background1});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Send the background image behind the form */
`;

const FormContainer = styled.div`
  position: relative;
  width: 400px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px); /* Apply a subtle blur effect */
`;

const FormContent = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #ffffff; /* White color for heading */
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    background-color:  #610000; /* Dark red color */
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
  }

  button:hover {
    background-color: #a80000;
  }

  p {
    margin-top: 15px;
    color: #ffffff; /* White color for the paragraph */
  }
`;

// Component
function CreateClub() {
  const [clubName, setClubName] = useState('');

  const handleInputChange = (event) => {
    setClubName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Club name:', clubName);
  };

  return (
    <Container>
      <BackgroundImage />
      <FormContainer>
        <FormContent>
          <h2>Step 1: Name your club</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Club name"
              value={clubName}
              onChange={handleInputChange}
            />
            <button type="submit">CREATE MY CLUB</button>
            <p>Don't worry, you can always change it later!</p>
          </form>
        </FormContent>
      </FormContainer>
    </Container>
  );
}

export default CreateClub;
