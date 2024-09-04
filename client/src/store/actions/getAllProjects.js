import axios from "axios";
export const getAllProjects = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:5001/api/projects");

        if (response.status < 200 || response.status >= 300) {
            throw new Error('Network response was not ok');
        }

        const projects = response.data;
        dispatch({
            type: 'SET_PROJECTS',
            payload: projects,
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
};
