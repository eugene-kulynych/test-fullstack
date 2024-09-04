import React from 'react';
import './ProjectItem.css';
const ProjectItem = ({ project, onUpdate, onDelete }) => {
    const handleUpdate = () => onUpdate(project);
    const handleDelete = () => onDelete(project);
    console.log(project)
    return (
        <div className="project-item">
            <div className="project-item-info">
                <h2>{project.name}</h2>
                <p>Owner: {project.owner}</p>
                <p>URL: <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
                <p>Stars: {project.stars}</p>
                <p>Forks: {project.forks}</p>
                <p>Issues: {project.issues}</p>
                <p>Created At: {project.createdAt}</p>
            </div>
            <div className="project-item-actions">
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ProjectItem;
