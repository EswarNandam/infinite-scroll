import { combineReducers } from 'redux';
import projectsReducer from './projectReducer';


// Used combine reducers for multiple usage of reducers 
const rootReducer = combineReducers({
    projects: projectsReducer,
});

export default rootReducer;
