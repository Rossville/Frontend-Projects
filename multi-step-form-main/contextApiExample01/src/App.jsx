import './App.css'
import TaskComponent from './components/InputTask/TaskComponent';
import TaskContextProvider from './store/TaskContextProvider';

function App() {

  return (
    <TaskContextProvider>
      <TaskComponent/>
    </TaskContextProvider>
  )
}

export default App;
