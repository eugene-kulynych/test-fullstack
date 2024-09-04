import React from "react";
import Header from "../Header/Header";
import ProjectList from "../ProjectList/ProjectList";

const Home = ({ isAuthenticated }) => {
  return (
    <>
      <Header />
      {!isAuthenticated ? <div>Please register or login</div> : <ProjectList />}
    </>
  );
};

export default Home;
