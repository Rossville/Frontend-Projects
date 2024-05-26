import {createSlice} from '@reduxjs/toolkit';

const ChangeSectionSlice = createSlice({
    name: 'changeSection',
    initialState : {
        currSection : 0,
    },
    reducers : {
        nextBtn : (state) => {
            if(state.currSection < 3){
                state.currSection = state.currSection + 1;
            }
        },
        previousBtn : (state) => {
            if(state.currSection > 0){
                state.currSection = state.currSection - 1;
            }
        }
    }
})

export const {nextBtn,previousBtn}  = ChangeSectionSlice.actions;

export default ChangeSectionSlice.reducer;