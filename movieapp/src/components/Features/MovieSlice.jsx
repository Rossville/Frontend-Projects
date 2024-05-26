import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    
}

/*

movieTitle : ['Everything Everywhere All At Once','Black Widow','Blade Runner','Blade Runner 2049','Spider-Man','Spider-Man 2','Spider-Man 3','Spider-Man: Into the Spider-Verse','Spider-Man: Homecoming','Spider-Man: Far From Home','Spider-Man: No Way Home','The Amazing Spider-Man','The Amazing Spider-Man 2','The Hangover','The Hangover Part II','The Hangover Part III','Peaky Blinders','The Kerala Story','Iron Man','Iron Man 2','Iron Man 3']

*/

const MovieSlice = createSlice({
    name : 'movie',
    initialState,
    reducers: {
        fetchmovie: async (state,action) => {
                console.log(action.payload);
        },
        addmovie : (state) => {

        }
    }
})

export const {fetchmovie}  = MovieSlice.actions;
export default MovieSlice.reducer;