import React from "react";

const Boxes = (props: any) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 h-40 bg-white rounded-xl px-4 py-4 shadow-md flex flex-col justify-between">
      {/* Text Content */}
      {props.text && (
        <span className="text-gray-700 text-lg font-medium">{props.text}</span>
      )}

      {/* Data Display */}
      <div className="flex  space-x-2 mt-4">
        {props.data?.current || props.data ? (
          <b className="text-3xl text-black">
            {props.data?.current ? props.data?.current : props.data}
          </b>
        ) : null}
        {props.data?.total && (
          <span className="text-xl text-gray-500">/{props.data?.total}</span>
        )}
      </div>
    </div>
  );
};

export default Boxes;
