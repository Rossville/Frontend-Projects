import {useState} from 'react';
import Input from './Input.jsx';
import Header from './Header.jsx'
import arcadesvg from '/icon-arcade.svg';
import advancedsvg from '/icon-advanced.svg';
import prosvg from '/icon-pro.svg';
import SelectPlan from './SelectPlan.jsx';
import { useSelector,useDispatch } from 'react-redux';
import {nextBtn,previousBtn} from './features/ChangeSectionSlice.jsx';
import Addons from './Addons.jsx';
import FinishingUp from './FinishingUp.jsx';


const Form = ({activeField,Sectiontitle,Sectiondescription}) => {

    const dispatch = useDispatch();
    const currSlide = useSelector(state => state.currSection);

    const [toggle,setToggle] = useState(false);

    const handletogglebtn = (e) => {
        e.preventDefault();
        setToggle(prevState => !prevState);
    }

    const nextSection = (e) => {
        e.preventDefault();
        dispatch(nextBtn());
    }

    const previousSection = (e) => {
        e.preventDefault();
        dispatch(previousBtn());
    }

    return(
            <div className='w-full mx-auto md:w-11/12'>
                <form>                    
                    {/* header */}
                    <div className='Header'>
                        <Header title={Sectiontitle} description={Sectiondescription}/>
                    </div>
                    {/* Input fields */}
                    <div className={activeField === 'InputField'?undefined:'hidden'}>
                        <Input inputType='text' placeholder='eg. Stephen King' InputField='Name'/>
                        <Input inputType='email' placeholder='eg. stephenking@lorem.com' InputField='Email Address'/>
                        <Input inputType='number' placeholder='eg. +1234 567 890' InputField='Phone Number'/>
                    </div>
                    {/* Select your plan btn */}
                    <div className={activeField === 'SelectPlan'?'SelectPlan flex flex-col':'hidden'}>
                        <div className='SelectPlan flex flex-col py-2 px-2 mx-auto my-4 justify-between w-5/6 md:flex-row md:space-x-4'>
                            <SelectPlan planIcon={arcadesvg} Plantext='Arcade' pricing='$9/mo'/>
                            <SelectPlan planIcon={advancedsvg} Plantext='Advanced' pricing='$15/mo'/>
                            <SelectPlan planIcon={prosvg} Plantext='Pro' pricing='$12/mo'/>
                        </div>                        
                        <div className='switch flex justify-center px-2 py-2 space-x-2 w-5/6 mx-auto bg-gray-100'>
                            <div>Monthly</div>
                            <div>
                                <button onClick={handletogglebtn} className='text-xl text-blue-500'><i className={toggle?'fa-solid fa-toggle-on':'fa-solid fa-toggle-off'}></i></button>
                            </div>
                            <div>Yearly</div>
                        </div>
                    </div>
                    {/* Add-ons */}
                    <div className={activeField === 'Add-ons'?'w-5/6 mx-auto':'hidden'}>
                        <Addons PlanTitle='Online Service' PlanDesc='Access to multiplayer games' Planprice='+$1/mo'/>
                        <Addons PlanTitle='Large Storage' PlanDesc='Extra 1 TB of cloud save' Planprice='+$2/mo'/>
                        <Addons PlanTitle='Customizable Profile' PlanDesc='Custom theme on your profile' Planprice='+$2/mo'/>
                    </div>
                    {/* Finishing Up Form - last page of the form */}
                    <div className={activeField === 'Finishing-Up'?'w-5/6 mx-auto':'hidden'}>
                        <FinishingUp ServiceTitle='Arcade(monthly)' ServicePrice='+$9/mo' Service1='Online Service' ServicePrice1='+$1/mo' Service2='Larger Storage' ServicePrice2='+$2/mo' ServiceTotal='Total(per month)' ServicePriceTotal='+$12/mo'/>
                    </div>
                    {/* Button component */}
                    <div className={currSlide === 0 ?"button hidden w-5/6 mx-auto mt-20 mb-6 md:flex justify-end":"button hidden w-5/6 mx-auto mt-20 mb-6 md:flex justify-between"}>
                         <div className={currSlide === 0?'hidden':'btn text-blue-800 font-bold border border-blue-800 p-2 rounded-lg hover:text-white hover:bg-blue-800'}>
                            <button onClick={previousSection}>Go Back</button>
                        </div>
                        <div className='btn bg-blue-950 text-white rounded-lg p-2 hover:bg-blue-800 '>
                            <button onClick={nextSection}>{currSlide === 3?'Confirm':'Next Step'}</button>
                        </div>
                    </div>
                </form>
            </div>
    );
}

export default Form;