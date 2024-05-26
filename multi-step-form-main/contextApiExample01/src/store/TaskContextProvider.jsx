import {useState} from 'react';
import TaskContext from "./TaskContext.js";

const TaskContextProvider = ({children}) => {

    //  setTasks will consists of an array of objects, and inside those objects there will be tasks.
    const [tasks,setTasks] = useState([]);

    return(
        <TaskContext.Provider value={{tasks,setTasks}}>
        {children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;