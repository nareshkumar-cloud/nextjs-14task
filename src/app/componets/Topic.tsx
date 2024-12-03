import React from "react";
import TopicItem from "./TopicItem";

const Topic = (props: any) => {
  type Item = {
    name: string;
    image: string;
    correct_percentage: Number;
  };

  return (
    <div className="w-full ml-2 ">
      <p className="ml-2 mt-2 mb-4 text-gray-500">{props.name} Topics</p>
      {props.data.length > 0 &&
        props.data.map((data: Item, index: number) => {
          const key = `${data.name}-${index}`; // Combine name and index for uniqueness
          return (
            <TopicItem
              key={key} // Add a unique key here
              item={data}
              background={props.background}
              color={props.color}
            />
          );
        })}
    </div>
  );
};

export default Topic;
