import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signIn,closeBtn} from '../Features/PortalSlice';

const SignIn = () => {
    const state = useSelector(state => state[1]);
    const dispatch = useDispatch();

    const handleSignIn = () => {
        console.log(state.name);
        dispatch(signIn());
    }

    return(
        <>  
            <div className="sign-in">
                <button className='bg-white text-blue-800 px-4 py-2 rounded-lg' onClick={handleSignIn}>Login In/Sign Up</button>
            </div>
        </>
    );
}


export default SignIn;

