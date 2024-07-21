import {Input} from "@/components/ui/input";

const input = (props) => {

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor={`${props.inputFor}`}>{props.inputFor}</label>
        <Input type={`${props.inputtype}`} id={`${props.inputFor}`} placeholder={`${props.inputFor}`} />
      </div>
    </>
  );
};


export default input;