import TeamImage from '../../public/team.png';
import Image from 'next/image';

const team = () => {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Text Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Our team</h2>
            <p className="mb-6">
              Thousand is a full-cycle digital production company with its own
              product analytics, design, web and mobile development.
            </p>
            <div className="flex space-x-8 mb-6">
              <div className="text-center">
                <div className="text-lg md:text-4xl font-bold">28</div>
                <div className="text-gray-500">team members</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-4xl font-bold">+100</div>
                <div className="text-gray-500">projects</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-4xl font-bold">7 years</div>
                <div className="text-gray-500">in IT sphere</div>
              </div>
            </div>
            <p className="text-gray-600">
              All the necessary specialists - from a designer to a tester - are
              on our staff. We hire the best specialists in the market. It’s
              expensive but worth it.
            </p>
          </div>
          {/* Image Section */}
          <div className="flex-1 hidden md:block">
            <Image
              src={TeamImage}
              alt="Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};


export default team;