export default function Input({InputField,placeholder,inputType}){
    return(
        <div className='title w-5/6 mx-auto mt-5 text-start'>
            <p className='text-blue-950'>{InputField}</p>
            <p><input type={inputType} className='border px-4 py-2 rounded-md w-full' placeholder={placeholder}/></p>
        </div>
    );
}