import React from 'react';
import { FaCaretUp } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';

const GroupsItem = (props: any) => {
  return (
    <div className="  md:flex-row gap-4 p-4 border-b border-gray-300">
      {props.Group.group_name && (
        <div className=" text-lg font-medium text-gray-700">
          {props.Group.group_name}
        </div>
      )}

      <div className=" text-sm">
      {props.Group.points_per_user && props.Group.accuracy_percentage && (
          <span>
            {props.Group.points_per_user} points/User -{' '}
            {props.Group.accuracy_percentage}% Correct
          </span>
        )}
      </div>
      <div className="flex items-center md:justify-end  space-x-2 text-sm text-gray-600">
        <span className="font-bold">{props.rank}</span>
        {props.Group.previous_accuracy_percentage >
        props.Group.accuracy_percentage ? (
          <FaCaretUp className="text-green-500" />
        ) : (
          <FaCaretDown className="text-red-500" />
        )}
      </div>
    </div>
  );
};

export default GroupsItem;
