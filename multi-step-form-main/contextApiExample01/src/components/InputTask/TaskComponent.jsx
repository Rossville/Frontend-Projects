import React,{useState} from "react";
import InputTask from './InputTask';
import DisplayTask from "../DisplayTask/DisplayTask";

const TaskComponent = () => {

    return(
        <div>
            <InputTask/>
            <DisplayTask/>
        </div>
    );
}

export default TaskComponent;