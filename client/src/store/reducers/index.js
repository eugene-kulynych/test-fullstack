import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { projectsReducer } from "./ProjectsReducer";

export default combineReducers({
  user: userReducer,
  projects: projectsReducer,
});
