import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components for the Profile Page
const ProfilePageContainer = styled.div`
  display: flex;
  background-color: black;
  color: white;
  font-family: 'Georgia', 'Times New Roman', serif;
  min-height: 100vh;
`;

const NavbarHeight = '60px'; // Adjust this to the height of your navbar

const Sidebar = styled.div`
  width: 300px; /* Width of the sidebar */
  background-color: #390000; /* Sidebar background color */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: fixed; /* Makes the sidebar stay in place while scrolling */
  height: calc(100vh - ${NavbarHeight}); /* Ensures the sidebar height spans the viewport minus navbar */
  top: ${NavbarHeight}; /* Aligns the sidebar below the navbar */
  left: 0; /* Aligns the sidebar to the left */
  z-index: 10; /* Ensures the sidebar appears above the main content */
  margin-top: 30px; /* Adds space at the top of the sidebar to avoid overlapping with navbar */
`;

const ProfilePic = styled.img`
  width: 120px; /* Adjust size for the profile picture */
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 2px solid white; /* Border around profile picture */
`;

const UserName = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: white;
`;

const EditButton = styled.button`
  background-color: black;
  color: white;
  border: 2px solid white;
  padding: 8px 12px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #610000;
  }
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1em;
  padding: 10px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #f0f0f0; /* Slightly lighter on hover */
  }
`;

const MainSection = styled.div`
  flex: 1;
  padding: 30px;
  background-color: black;
  margin-left: 300px; /* Adds left margin equal to the sidebar width */
  margin-top: ${NavbarHeight}; /* Adds top margin to ensure content starts below the navbar */
  position: relative; /* Allows positioning of children elements */
`;

const Section = styled.div`
  background-color: #390000; /* Section background color */
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: white;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 1.3em;
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  border: 2px solid white;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #610000;
  }
`;

const RecommendedBooksSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px; /* Adjust this value to align with the sidebar */
`;

const RecommendedBook = styled.div`
  width: 150px;
  background-color: white;
  color: #610000;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9em;
`;

const Footer = styled.footer`
  text-align: center;
  color: white;
  padding: 20px;
  font-size: 0.8em;
`;

// Profile Page Component
const MyProfile = () => {
  return (
    <ProfilePageContainer>
      {/* Sidebar Section */}
      <Sidebar>
        <ProfilePic src="https://via.placeholder.com/120" alt="Profile" /> {/* Placeholder for profile image */}
        <UserName>John Doe</UserName>
        <EditButton>Edit Account</EditButton>
        <SidebarLink to="#">My 2024 Reading Goals</SidebarLink>
        <SidebarLink to="#">Currently Reading</SidebarLink>
        <SidebarLink to="#">Favourite Books</SidebarLink>
        <SidebarLink to="#">Books I've Read</SidebarLink>
        <SidebarLink to="#">Books I Want to Read</SidebarLink>
      </Sidebar>

      {/* Main Content Section */}
      <MainSection>
        {/* Recommended Books for You */}
        <Section>
          <SectionTitle>Recommended Books for You</SectionTitle>
          <RecommendedBooksSection>
            <RecommendedBook>Book 1</RecommendedBook>
            <RecommendedBook>Book 2</RecommendedBook>
            <RecommendedBook>Book 3</RecommendedBook>
            <RecommendedBook>Book 4</RecommendedBook>
          </RecommendedBooksSection>
        </Section>

        {/* My Clubs */}
        <Section>
          <SectionHeader>
            <SectionTitle>My Clubs</SectionTitle>
          </SectionHeader>
          <p>Your Club Name: Book Lovers Club</p>
          <p>
            Invite Link: <Link to="#">clublink.com/invite</Link>
          </p>
        </Section>

        {/* My Favorite Books */}
        <Section>
          <SectionHeader>
            <SectionTitle>My Favorite Books</SectionTitle>
            <AddButton>Add Favorite Books</AddButton>
          </SectionHeader>
          <p>List of your favorite books will appear here.</p>
        </Section>

        {/* Books I've Read */}
        <Section>
          <SectionHeader>
            <SectionTitle>Books I've Read</SectionTitle>
            <AddButton>Add Books to Read</AddButton>
          </SectionHeader>
          <p>List of books you've read will appear here.</p>
        </Section>

        {/* Books I Want to Read */}
        <Section>
          <SectionHeader>
            <SectionTitle>Books I Want to Read</SectionTitle>
            <AddButton>Add Book to Be Read</AddButton>
          </SectionHeader>
          <p>List of books you want to read will appear here.</p>
        </Section>

        {/* Currently Reading */}
        <Section>
          <SectionHeader>
            <SectionTitle>Currently Reading</SectionTitle>
            <AddButton>Add Books You're Currently Reading</AddButton>
          </SectionHeader>
          <p>List of books you're currently reading will appear here.</p>
        </Section>

        {/* Footer */}
        <Footer>&copy; 2024 Book Worms. All rights reserved.</Footer>
      </MainSection>
    </ProfilePageContainer>
  );
};

export default MyProfile;
