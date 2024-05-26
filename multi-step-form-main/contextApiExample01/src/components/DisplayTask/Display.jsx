import {useState,useContext} from 'react';
import TaskContext from '../../store/TaskContext';

const Display = ({ondisplaytask}) => {

    const [isEdited,setIsEdited] = useState(false);
    const [editedValue,setEditedValue] = useState(ondisplaytask.task);
    const {tasks,setTasks} = useContext(TaskContext);

    const handleDelete = (id) => {
        console.log(tasks.map((task,index)=>{
            task.id === id?console.log(`matched at ${task.task}`):console.log(`Not matched at ${index}`)
        }))
        console.log(tasks)
    }

    const handleEdit = () => {
        setIsEdited(prevState => !prevState);
    }

    const handleEditedValue = (value) => {
        setEditedValue(value);
    }

    const handleSave = () => {
        setIsEdited(prevState => !prevState);
    }

    return(
        <div>
            <div className='flex justify-between p-4'>
                <div className='flex'>
                    <div className='mx-2'><input className='w-4 h-4' type='checkbox'/></div>
                    <div className='text-xl mx-2'>{isEdited?<input type='text' value={editedValue} onChange={(e)=>handleEditedValue(e.target.value)}/>:editedValue}</div> 
                </div>
                <div className='flex'>
                    <div className='mx-1'><button onClick={()=>handleDelete(ondisplaytask.id)} className='hover:text-red-600'><span className='material-symbols-outlined'>delete</span></button></div>
                    <div className='mx-1'>{isEdited?(
                        <button onClick={()=>handleSave(ondisplaytask.id)} className='text-green-700'><span className='material-symbols-outlined'>check_circle</span></button>
                    ):(
                        <button onClick={handleEdit} className='hover:text-green-600'><span className='material-symbols-outlined'>edit</span></button>
                    )}</div>
                </div>
            </div>
        </div>
    );
}

export default Display;
