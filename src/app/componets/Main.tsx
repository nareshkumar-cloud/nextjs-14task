"use client";

import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

import Boxes from "./Boxes";
import Activity from "./Activity";
import data from "./task-data.json";
import Topic from "./Topic";
import UserBord from "./UserBord";
import GroupBord from "./GroupBord";
import NavBar from "./NavBar";
import Sidear from "./Sidebar";

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidear />

      {/* Main Content */}
      <div className="flex flex-col w-full md:pl-72">
        {/* Header Section */}
        <main className="flex-1 p-4 md:p-6 bg-gray-100">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">Reports</h1>
            <h3
              className="text-sm font-medium flex items-center cursor-pointer"
              onClick={() => fetchData(data.api_secret)}
            >
              <FaDownload className="mr-2" /> Download
            </h3>
          </div>
          <hr className="border-t-2 border-gray-300 my-4" />

          {/* Navbar */}
          <NavBar />

          {/* Boxes Section */}
          <div className="flex w-full flex-wrap md:flex-nowrap items-center gap-4">
            <div className="flex flex-wrap w-full md:w-1/2 gap-3">
              <Boxes text="Active Users" data={data.metrics.active_users} />
              <Boxes
                text="Questions Answered"
                data={data.metrics.questions_answered}
              />
              <Boxes
                text="Av. Session Length"
                data={convertIntoMinAndSec(
                  data.metrics.average_session_length_seconds
                )}
              />
              <Boxes
                text="Starting Knowledge"
                data={data.metrics.starting_knowledge_percentage}
              />
              <Boxes
                text="Current Knowledge"
                data={data.metrics.current_knowledge_percentage}
              />
              <Boxes
                text="Knowledge Gain"
                data={
                  Number(data.metrics.current_knowledge_percentage) -
                  Number(data.metrics.starting_knowledge_percentage)
                }
              />
            </div>
            <div className="flex flex-wrap w-full md:w-1/2 justify-center items-center bg-white rounded-xl">
              <Activity monthly={data.activity} />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap mt-4 gap-4">
            <div className="w-full md:w-1/2 bg-white rounded-xl">
              <Topic
                data={data.topics.weakest}
                name="Weakeast"
                background="linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)"
                color="rgb(255,222,225)"
              />
            </div>
            <div className="w-full md:w-1/2 bg-white rounded-xl">
              <Topic
                data={data.topics.strongest}
                name="Strongest"
                background="linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)"
                color="rgb(213,251,235)"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap mt-4 gap-4">
            <div className="w-full md:w-1/2 bg-white rounded-xl">
              <UserBord data={data.user_leaderboard} />
            </div>
            <div className="w-full md:w-1/2 bg-white rounded-xl">
              <GroupBord data={data.groups_leaderboard} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const fetchData = async (apiSecret: string) => {
  try {
    const response = await fetch(
      "https://testd5-img.azurewebsites.net/api/imgdownload",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          api: apiSecret,
        }),
      }
    );
    const jsonResponse = await response.json();
    console.log("JSON RESPONSE");
    // setData(JSON.stringify(jsonResponse));
  } catch (error) {
    console.error("Error fetching data:", error);
    // setData("Error fetching data");
  }
};

const convertIntoMinAndSec = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60); // Get the full minutes
  const seconds = totalSeconds % 60; // Get the remaining seconds

  return `${minutes}m ${seconds}s`;
};
export default Dashboard;
