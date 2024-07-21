import Logo from '../../public/footer-logo.png';
import Image from 'next/image';

const footer = () => {
  return (
    <>
      <footer className="bg-black w-5/6 m-auto my-5 rounded-lg text-white py-8">
        <div className="space-y-4">
          {/* Logo and Company Info */}
          <div className="flex flex-col justify-center m-auto w-80 items-center md:items-start">
            <Image className='w-64' src={Logo} alt="Company Logo"/>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4 m-auto w-3/4 justify-center md:flex-row md:space-x-12 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-400">Contact nums</p>
              <p className="font-semibold">+91 0000000000</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-400">Gmail</p>
              <p className="font-semibold">demo@gmail.com</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-400">Address</p>
              <p className="font-semibold">Mumbai, India</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-400">Leave a request</p>
              <p className="font-semibold">Leave a request</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          We work throughout the world
        </div>
      </footer>
    </>
  );
};


export default footer;