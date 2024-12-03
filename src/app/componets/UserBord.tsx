"use client";
import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";

const UserBord = (props: any) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const data = props.data.sort(
      (a: any, b: any) => b.accuracy_percentage - a.accuracy_percentage
    );
    setUserData(data);
  }, [props.data]); // Ensure props.data is added as a dependency

  type User = {
    name: string;
    image: string;
    points: number;
    accuracy_percentage: number;
    previous_accuracy_percentage: number;
  };

  return (
    <div className="mt-2">
      <h1 className="mt-2 mb-4 ml-2">User Leaderboard</h1>
      {userData.length > 0 &&
        userData.map((data: User, index: number) => {
          const key = `${data.name}-${index}`; // Use a combination of name and index as the key
          return <UserItem key={key} User={data} rank={index + 1} />;
        })}
    </div>
  );
};

export default UserBord;
