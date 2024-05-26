import './App.css'
import BackgroundImage from './BackgroundImage.jsx';
import ChangeStep from './ChangeStep.jsx';

function App() {

  return (
    <>
      <div className='flex w-full px-4 py-4 bg-white rounded-lg mt-20 mx-auto md:max-w-3xl shadow-2xl'>
        <BackgroundImage/>
        <ChangeStep/>
      </div>
   </>
  )
}

export default App
