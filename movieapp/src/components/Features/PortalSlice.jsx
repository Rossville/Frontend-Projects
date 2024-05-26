import {createSlice} from '@reduxjs/toolkit';

export const PortalSlice = createSlice({
    name: 'modal',
    initialState : {
        value : false
    },
    reducers : {
        signIn : (state) => {
            state.value = true
        },
        closeBtn : (state) => {
            state.value = false
        }
    }
})

export const {signIn,closeBtn} = PortalSlice.actions

export default PortalSlice.reducer