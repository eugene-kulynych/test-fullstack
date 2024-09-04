import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ProjectItem from "../ProjectItem/ProjectItem";
import AddProject from "../AddProject/AddProject";
import { getAllProjects } from "../../store/actions/getAllProjects";
import { addProject, removeProject } from "../../helpers/request";
import "./ProjectList.css";

const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const notify = (msg) => toast(msg);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const handleAdd = async (repoPath) => {
    const [owner, repo] = repoPath.split("/");
    try {
      const response = await addProject({
        owner,
        repo,
      });

      if (response.status === 201) {
        dispatch(getAllProjects());
      }
      notify("Added");
    } catch (e) {
      notify(`Error: ${e.response.data.message}`);
    }
  };

  const handleUpdate = (project) => {
    // Implement update logic
    console.log("Update project", project);
  };

  const handleDelete = async (id) => {
    try {
      const response = await removeProject(id);

      if (response.status === 200) {
        dispatch(getAllProjects());
      }
      notify(response.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="project-list">
      <h1>Project List</h1>
      <AddProject onAdd={handleAdd} />
      <div className="project-list-container">
        {projects.map((project, index) => (
          <ProjectItem
            key={project._id}
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
