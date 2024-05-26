import Navbar from './components/Navbar/Navbar'
import './App.css'
import MoviesList from './components/MoviesList/MoviesList'
import SignInModalContainer from './components/SignInModalContainer/SignInModalContainer'
import {useSelector} from 'react-redux'

function App() {
  const show = useSelector(state => state.value);
  return (
    <>
      {show && <SignInModalContainer/>}
      <Navbar/>
      <MoviesList/>
    </>
  )
}

export default App
