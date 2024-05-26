import BackgroundImageText from './BackgroundImageText.jsx';

const BackgroundImage = () => {
    return(
        <div className="background-image hidden mx-1  px-6 py-6 rounded-xl space-y-4 md:w-80 md:flex flex-col items-start ">
          <BackgroundImageText step='STEP 1' number='1' title='YOUR INFO' active='true'/>
          <BackgroundImageText step='STEP 2' number='2' title='SELECT PLAN' active='false'/>
          <BackgroundImageText step='STEP 3' number='3' title='ADD-ONS' active='false'/>
          <BackgroundImageText step='STEP 4' number='4' title='SUMMARY' active='false'/>
        </div>
    );
}

export default BackgroundImage;