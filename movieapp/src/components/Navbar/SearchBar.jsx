import {useRef, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { fetchmovie } from '../Features/MovieSlice'; 
import axios from 'axios';

const SearchBar = () => {

    const [movieInput,setMovieInput] = useState('');
    const searchBarFocus = useRef(null);
    const dispatch = useDispatch();

    const handleSearch = async () => {
        if(movieInput.length === 0){
            searchBarFocus.current.focus();
        }
        else{
            console.log(movieInput);
            dispatch(fetchmovie(movieInput));
            const response = await axios.get(`http://www.omdbapi.com/?apikey=c4bceb23&t=${movieInput}`);
            const data = await response.data;
            console.log(data.Poster);
            setMovieInput('');
        }
    }
    //automatically focus whenever the page gets re-render.
    /*
        useEffect(()=>{
            searchBarFocus.current.focus();
        },[])
    */

    return(
        <div className="searchBar bg-white rounded-3xl">
            <input className='w-80 h-10 p-2 rounded-2xl' ref={searchBarFocus} type='text' value={movieInput} onChange={(e)=>setMovieInput(e.target.value)} placeholder="Search Blade Runner 2049 ..."/>
            <button onClick={handleSearch} className="bg-slate-200 rounded-full px-2 py-1 hover:bg-slate-300"><span className='material-symbols-outlined'>search</span></button>
        </div>
    );
}

export default SearchBar;