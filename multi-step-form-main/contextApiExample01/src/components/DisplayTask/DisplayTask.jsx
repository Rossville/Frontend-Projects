import {useContext} from 'react';
import TaskContext from '../../store/TaskContext.js';
import Display from './Display.jsx';

const sampleData = [
    'shruti',
    'ashutosh',
    'Aman',
    'Krishna',
    'Mohit',
    'Tushar0',
    'Mayank'
]

const DisplayTask = () => {
    const {tasks} = useContext(TaskContext);

    return(
        <div>{tasks.map((task)=> (
            <div className='mx-auto my-2 rounded bg-blue-300 w-9/12' key={task.id}><Display ondisplaytask={task}/></div>
        ))}</div>
    );
}

export default DisplayTask;