import {useState} from 'react';
import { closeBtn } from '../Features/PortalSlice';
import { useDispatch } from 'react-redux';


const SignInModalContainer = () => {

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeBtn());
    }

    return(
        <div className="ModalContainer absolute z-20 top-0 left-0 w-full h-screen bg-black opacity-80 ">
            <div className='close-btn absolute right-12 top-6'><button onClick={handleCloseModal} className='text-4xl px-6 py-4 bg-white rounded-full  hover:bg-red-900 hover:text-white'>X</button></div>
            <SignInModal/>
        </div>
    );
}

export default SignInModalContainer;


export const SignInModal = () => {
    
    const [logInInfo,setLogInInfo] = useState({
        username : '',
        password : ''
    });

    const handleUsername = (val) => {
        setLogInInfo((prevState)=>{
            return {
                ...prevState,
                username : val
            }
        })
    }

    const handlePassword = (val) => {
        setLogInInfo((prevState)=>{
            return {
                ...prevState,
                password : val
            }
        })
    }


    const handleLogIn = (e) => {

        e.preventDefault();

        localStorage.setItem('Logged In',1); // 1 symbolises that the logged in was successful.

        setLogInInfo(
            {
                username: '',
                password: ''
            }
        )
        console.log(logInInfo.username+" "+logInInfo.password);
    }


    return(
        <div className='max-w-5/6 mx-auto my-48 rounded-xl p-4 bg-white md:max-w-xl'>
            <div className='mx-auto  text-center space-y-10'>
                <div className='font-bold text-orange-500 text-3xl'>MovieMac</div>
                <form>
                    <div className='flex flex-col space-y-6'>                    
                        <div>
                            <input className='p-2 w-1/2 shadow-2xl border-b-2 border-orange-500' value={logInInfo.username} type='text' onChange={(e)=>handleUsername(e.target.value)} placeholder='Username or Email'/>
                        </div>
                        <div>
                            <input className='p-2 w-1/2 shadow-2xl border-b-2 border-orange-500' value={logInInfo.password} type='password' onChange={(e)=>handlePassword(e.target.value)} placeholder="Password"/>
                        </div>
                        <div>                    
                            <button className='bg-orange-500 text-white px-4 py-2 rounded-lg' onClick={handleLogIn}>Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

