import React from "react";
import Header from "../Header/Header";
import ProjectList from "../ProjectList/ProjectList";
import "./Home.css";

const Home = ({ isAuthenticated }) => {
  return (
    <>
      <Header />
      {!isAuthenticated ? (
        <div className="home-container">
          <p className="home-text">Please register or login to see projects</p>
        </div>
      ) : (
        <ProjectList />
      )}
    </>
  );
};

export default Home;
