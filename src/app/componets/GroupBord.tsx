import React, { useEffect, useState } from "react";
import GroupsItem from "./GroupsItem";

// Define the structure of the Group data
type Group = {
  group_name: string;
  points_per_user: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
};

// Define the props for GroupBord component
interface GroupBordProps {
  data: Group[]; // Array of Group objects passed as a prop
}

const GroupBord: React.FC<GroupBordProps> = (props) => {
  const [userData, setUserData] = useState<Group[]>([]);

  useEffect(() => {
    const sortedData = props.data.sort(
      (a, b) => b.accuracy_percentage - a.accuracy_percentage
    );
    setUserData(sortedData);
  }, [props.data]);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title */}
      <h1 className="mt-2 mb-4 ml-2">
        Groups Leaderboard
      </h1>

      {/* Group Items Container */}
      <div className="  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {userData.length > 0 &&
          userData.map((data, index) => (
            <GroupsItem Group={data} rank={index + 1} key={index} />
          ))}
      </div>
    </div>
  );
};

export default GroupBord;
