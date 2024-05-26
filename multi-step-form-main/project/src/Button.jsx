const Button = (props) => {

    const nextSection = () => {
        props.onhandleNextSection();
    }

    return(
        <div className="hidden w-5/6 mx-auto mt-20 md:flex justify-between">
            <div className='btn text-blue-800 font-bold border border-blue-800 p-2 rounded-lg hover:text-white hover:bg-blue-800'>
                <button>Go Back</button>
            </div>
            <div className='btn bg-blue-950 text-white rounded-lg p-2 hover:bg-blue-800'>
                <button onClick={nextSection}>Next Step</button>
            </div>
        </div>
    );
}

export default Button;