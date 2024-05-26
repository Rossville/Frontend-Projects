import Form from './Form.jsx';
import {useSelector} from 'react-redux';

const forms = [
    <Form Sectiontitle='Personal Info' Sectiondescription='Please provide your name, email address and phone number.' activeField='InputField'/>,
    <Form Sectiontitle='Select Plan' Sectiondescription='You have the option of monthly and yearly billing.' activeField='SelectPlan'/>,
    <Form Sectiontitle='Pick add-ons' Sectiondescription='Add-ons help enhance your gaming experience' activeField='Add-ons'/>,
    <Form Sectiontitle='Finishing up' Sectiondescription='Double-check everything looks OK before confirming' activeField='Finishing-Up'/>
]

const ChangeStep = () => {

    const currSlide = useSelector(state => state.currSection);

    return(
        <div className='w-full md:w-9/12'>
            <div>{forms[currSlide]}</div>
        </div>
    );
}

export default ChangeStep;
