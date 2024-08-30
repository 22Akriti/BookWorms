import React from 'react';
import styled from 'styled-components';
import videoSrc from '../assets/video.mp4'; // Adjust the path as needed

const LandingPageContainer = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const Quote = styled.blockquote`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px 30px; /* Increased padding for a slightly larger button */
  background-color: #610000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem; /* Adjust font size if needed */

  &:hover {
    background-color: #B22222;
  }
`;

const LandingPage = () => (
  <LandingPageContainer>
    <BackgroundVideo autoPlay muted loop>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </BackgroundVideo>
    <Overlay>
      <Quote>"If a book is well written, you'll always Find it too short."</Quote>
      <Button>See August's Popular Book</Button>
    </Overlay>
  </LandingPageContainer>
);

export default LandingPage;
