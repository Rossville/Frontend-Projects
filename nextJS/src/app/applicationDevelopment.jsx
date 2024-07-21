import PhoneImage from "../../public/applicationDevelopmentStage.png";
import Image from "next/image";
import Analysis from "../../public/analysis.png";
import Design from "../../public/Design.png";
import Development from "../../public/Development.png";
import Testing from "../../public/Testing.png";
import Launching from "../../public/Launching.png";
import Support from "../../public/Support.png";


const applicationDevelopment = () => {
  return (
    <>
      {" "}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">
          Application Development Stages
        </h2>
        <div className="md:flex space-y-10 md:space-y-0 space-x-5">
          <div className="1 pl-5 md:pl-0 space-y-5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex space-x-5">
                <div>
                    <Image src={Analysis} alt="anlysis"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Analysis</h3>
                </div>
              </div>
              <p>
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-5">
                <div>
                    <Image src={Design} alt="Design"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Design</h3>
                </div>
              </div>
              <p>
                We adapt the customer's corporate identity to the platform
                guidelines. We draw convenient and understandable interfaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-5">
                <div>
                    <Image src={Development} alt="Development"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Development</h3>
                </div>
              </div>
              <p>
                We create an extensible architecture, write clean and stable
                code. We integrate with customer technologies.
              </p>
            </div>
          </div>

          <div className="2">
            <div className="hidden md:flex justify-center mt-16">
              <div className="">
                <Image src={PhoneImage} alt="Phone" />
              </div>
            </div>
          </div>

          <div className="3 space-y-5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-5">
                <div>
                    <Image src={Testing} alt="Testing"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Testing</h3>
                </div>
              </div>
              <p>
                We carry out functional testing and do bug fixes. We adapt the
                application to different phone resolutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-5">
                <div>
                    <Image src={Launching} alt="Launching"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Launching</h3>
                </div>
              </div>
              <p>
                We design the application page and publish it in the App Store
                and Google Play stores.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-5">
                <div>
                    <Image src={Support} alt="Support"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Support</h3>
                </div>
              </div>
              <p>
                We monitor the stability of the application, update it for new
                devices and versions of iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default applicationDevelopment;
