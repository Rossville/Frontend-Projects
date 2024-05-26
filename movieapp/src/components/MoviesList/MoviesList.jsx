import MovieCard from "../MovieCards/MovieCard";
import {title} from '../../MoviesTitle/MoviesTitle';

const MoviesList = () => {
    return(
        <div className='md:grid sm:grid-cols-2 md:grid-cols-3'>
            {title.map((data,index)=> <MovieCard key={index} movieTitle={data.name}/>)}
        </div>
    );
}

export default MoviesList;