import {useState,useContext} from 'react';
import TaskContext from '../../store/TaskContext';

const InputTask = () => {

    const {tasks,setTasks} = useContext(TaskContext);
    const [task,setTask] = useState('');
    // setTasks comprises of an array.

    const handletask = (val) => {
        setTask(val);
    }
    
    const handleAddTask = () => {
        setTasks((prevState)=>{
            return [
                ...prevState,
                { 
                    task: task,
                    id: (Math.random()*10 + Math.random()*3)/(Math.random()*5)
                }
            ]
        });
        setTask('');
    }


    return(
        <div className='inputContainer absolute bottom-0 w-full px-4 py-2 bg-blue-300 flex justify-center'>
            <textarea type='text' className='w-9/12 text-xl md:text-3xl' value={task} onChange={(e)=>handletask(e.target.value)}/>
            <button onClick={handleAddTask}><span className='material-symbols-outlined mx-2 text-5xl'>add_circle</span></button>
        </div>
    );
}

export default InputTask;