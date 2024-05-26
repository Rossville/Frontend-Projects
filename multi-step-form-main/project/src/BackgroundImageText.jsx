

const BackgroundImageText = ({step,title,number}) => {
    //const [activeCheck,setActiveCheck] = useState(active);

    /*
    function myfunc(){setActiveCheck(prevCheck => {
        return prevCheck?'bg-blue-300 rounded-full text-xs p-1 w-6 h-6':'bg-transparent border border-black rounded-full text-xs p-1 w-6 h-6';
    })
    */

    return(
            <div className='flex my-1 items-start w-32'>
              <div className='bg-blue-300 rounded-full text-xs p-1 w-6 h-6'>{number}</div>
              <div className='ml-2 text-start'>
                <div className='text-gray-400 text-xs'>{step}</div>
                <div className='text-white text-sm'>{title}</div>
              </div>
            </div>
    );
}

export default BackgroundImageText;