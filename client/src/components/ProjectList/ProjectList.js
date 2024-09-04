import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProjectItem from "../ProjectItem/ProjectItem";
import AddProject from "../AddProject/AddProject";
import { getAllProjects } from "../../store/actions/getAllProjects";
import { toast } from 'react-toastify';
import "./ProjectList.css";


const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const notify = () => toast("Added");

  useEffect(() => {
    dispatch(getAllProjects());

    console.log(projects)
  }, []);

  const handleAdd = async (repoPath) => {
    const [owner, repo] = repoPath.split('/');
    try {
      const response = await axios.post('http://localhost:5001/api/projects', {
        owner,
        repo
      })

      if (response.status === 201) {
        dispatch(getAllProjects());
      }
      notify()
    } catch (e) {
      console.log()
    }

  };

  const handleUpdate = (project) => {
    // Implement update logic
    console.log("Update project", project);
  };

  const handleDelete = (project) => {
    // Implement delete logic
    console.log("Delete project", project);
  };

  return (
    <div className="project-list">
      <h1>Project List</h1>
      <AddProject onAdd={handleAdd} />
      <div className="project-list-container">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
