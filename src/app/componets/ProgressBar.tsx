

const ProgressBar = (props: any) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full space-y-2 sm:space-y-0 sm:space-x-2">
      {/* Progress Bar Container */}
      <div className=" w-full sm:w-auto">
        <div className=" h-4 w-40 rounded-full relative overflow-hidden"
        style={{ backgroundColor:`${props.color}`}}>
          <div
            className=" h-full rounded-full absolute bottom-0 left-0 transition-all"
            style={{ width: `${props.percentage}%` , background: `${props.background}` }}
          ></div>
        </div>
      </div>

      {/* Percentage Text */}
      <span className="text-sm font-medium text-gray-700 sm:ml-2">
        {props.percentage}% Correct
      </span>
    </div>
  );
};

export default ProgressBar;
