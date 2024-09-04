import React, { useState } from 'react';
const AddProject = ({ onAdd }) => {
    const [repoPath, setRepoPath] = useState('');

    const handleChange = (event) => {
        setRepoPath(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (repoPath) {
            onAdd(repoPath);
            setRepoPath('');
        }
    };

    return (
        <div className="add-project">
            <h2>Add New Project</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="repoPath">Repository Path:</label>
                <input
                    type="text"
                    id="repoPath"
                    value={repoPath}
                    onChange={handleChange}
                    placeholder="facebook/react"
                />
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default AddProject;
