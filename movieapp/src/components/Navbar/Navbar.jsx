import SearchBar from "./SearchBar";
import Logo from './Logo';
import SignIn from "./SignIn";

const Navbar = () => {
    return(
        <div className="bg-slate=600"> 
            <div className='flex px-4 justify-between py-2 bg-blue-500 mx-auto w-11/12'>
                <div>
                    <Logo/>
                </div>
                <div className='hidden space-x-10 w-3/5 justify-between md:flex'>  
                    <SearchBar/>   
                    <SignIn/>
                </div>
                <div className="md:hidden my-2">
                </div>
            </div>
        </div>
    );
}

export default Navbar;