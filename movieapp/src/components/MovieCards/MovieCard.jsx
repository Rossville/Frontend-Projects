import {useState} from 'react';

const MovieCard = ({movieTitle}) => {

        const [moviePoster,setMoviePoster] = useState('');

        const getMoviePoster = async () => {            
            const response = await fetch(`http://www.omdbapi.com/?apikey=c4bceb23&t=${movieTitle}`);
            const data = await response.json();
            setMoviePoster(data.Poster);
        }
        getMoviePoster();
        
    return(
        <div className='w-11/12 mx-auto'>
            <div className= "rounded-xl shadow-xl mx-auto w-64 cursor-pointer my-6 overflow-hidden">
                <div className='w-full h-3/5'>
                    <img className='w-full h-96' src={moviePoster}/>
                </div>
                <div className='w-full font-bold h-2/5 text-lg px-4 py-2'>{movieTitle}</div>
            </div>
        </div>
    );
}

export default MovieCard;