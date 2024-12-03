import React from 'react';
import BarChart from './CustomBarChat';


const Activity = (props: any) => {
  return (
    <div className='mt-2 px-4 sm:px-6 md:px-8'>
      {/* Header section */}
      <div className="flex justify-between items-center text-sm sm:text-base md:text-lg mb-4">
        <span className='px-2 font-semibold'>Activity</span>
        <span className='px-2 font-semibold'>Month</span>
      </div>

      <hr className="my-4" />

      {/* Bar chart */}
      <div className="w-full">
        <BarChart monthly={props.monthly} />
      </div>
    </div>
  );
};

export default Activity;
