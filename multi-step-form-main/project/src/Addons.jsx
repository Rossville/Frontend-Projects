import {useState} from 'react';

const Addons = (props) => {
    const [check,setCheck] = useState(false);

    const handlecheckbox = () => {
        setCheck((prevCheck)=>!prevCheck);
    }

    const {PlanTitle='Online Serive',PlanDesc='Access to multiplayer games',Planprice='+$1/mo'} = props;
    return(
        <div className="mt-10 space-y-4">
            <div className='addon-plan px-4 py-2 w-full border flex justify-between border-blue-700 rounded-lg'>
                <div className="left flex space-x-4">
                    <div className='checkbox '>
                        <span onClick={handlecheckbox} className={check?'material-symbols-outlined hover:cursor-pointer text-blue-600 font-light':'material-symbols-outlined  font-light hover:cursor-pointer'}>{check?'check_box':'check_box_outline_blank'}</span>
                    </div>
                    <div className='plan text-start'>
                        <div className='text-sm font-bold text-blue-900'>{PlanTitle}</div>
                        <div className='text-xs font-bold text-slate-300'>{PlanDesc}</div>
                    </div>
                </div>
                <div className="right text-xs font-semibold mt-2 text-blue-600">
                    {Planprice}
                </div>
            </div>
        </div>
    );
}

export default Addons;