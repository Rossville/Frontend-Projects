const FinishingUp = (props) => {
    const {ServiceTitle='Arcade(monthly)',ServicePrice='+$9/mo',Service1,Service2,ServicePrice1,ServicePrice2,ServiceTotal,ServicePriceTotal} = props;
    return(
        <div className='mt-10'>
            <div className='purchase-detail'>
                <div className='rounded-lg px-4 py-2 bg-slate-100'>
                    <div className='flex justify-between w-full'>
                        <div className='left font-bold text-blue-900 text-sm'>
                            {ServiceTitle}
                        </div>
                        <div className='right font-bold text-blue-900 text-sm'>
                            {ServicePrice}
                        </div>
                    </div>
                    <div className='line w-full my-6'>
                        <hr/>
                    </div>
                    <div className='Service w-full flex justify-between my-2'>
                        <div className='left  text-slate-400 text-sm'>
                            {Service1}
                        </div>
                        <div className='right  text-slate-400 text-sm'>
                            {ServicePrice1}
                        </div>
                    </div>
                    <div className='Service w-full flex justify-between my-2'>
                        <div className='left  text-slate-400 text-sm'>
                            {Service2}
                        </div>
                        <div className='right  text-slate-400 text-sm'>
                            {ServicePrice2}
                        </div>
                    </div>
                </div>
                <div className="flex w-11/12 mx-auto justify-between my-4">
                        <div className='left font-semibold text-slate-400 text-sm'>
                            {ServiceTotal}
                        </div>
                        <div className='right  text-violet-600 text-lg'>
                            {ServicePriceTotal}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default FinishingUp;