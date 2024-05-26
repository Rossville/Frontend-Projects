import {useState} from 'react';

const SelectPlan = ({planIcon,Plantext,pricing}) => {
    const [planStyle,setPlanStyle] = useState(false);

    const handlechangeStyleOnClick = (e) => {
        e.preventDefault();
        setPlanStyle(prevStyle => !prevStyle);
    }

    return(
        <div>
            <button onClick={handlechangeStyleOnClick} className={planStyle?'flex w-full text-start px-4 py-2 my-4 rounded-lg md:w-28 md:space-y-12 border border-blue-700 md:block':'flex w-full text-start px-4 py-2 my-4 rounded-lg md:block md:w-28 md:space-y-12 border bor'}>
                <div><img className='w-8' src={planIcon}/></div>
                <div className='Pricing-and-text'>
                    <div className='font-medium text-blue-800'>{Plantext}</div>
                    <div className='text-xs text-gray-400 font-bold'>{pricing}</div>
                </div>
            </button>
        </div>
    );
}

export default SelectPlan;