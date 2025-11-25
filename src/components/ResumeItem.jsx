import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaDollarSign,
} from "react-icons/fa";

const ResumeItems = () => {
  return (
    <div className="flex bg-amber-50 flex-col items-center rounded-3xl pt-3.5">
      <header className="flex items-center justify-around gap-2.5 w-full">
        <p className="text-2xl">Entrada</p>
        <FaRegArrowAltCircleUp color="green" size={25} />
      </header>
      <span className="mt-2.5 text-2xl font-bold">Total</span>
    </div>
  );
};

export default ResumeItems;
