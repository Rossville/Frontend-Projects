export default function Header({title,description}){
    return(
    <div className="title w-5/6 mx-auto mt-5 text-start">
        <p className="text-3xl text-blue-950 font-bold">{title}</p>
        <p className='text-sm text-gray-400'>{description}</p>
    </div>
    );
}