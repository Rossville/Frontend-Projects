import { MdKeyboardArrowRight } from "react-icons/md";

const showcase = ({ dispname }) => {
  return (
    <div className="w-96 my-5">
      <div className="flex space-x-2 md:m-auto w-48 cursor-pointer text-center hover:font-bold">
        {dispname}
        <MdKeyboardArrowRight className="pt-1 custom-green text-xl" />
      </div>
    </div>
  );
};

export default showcase;
