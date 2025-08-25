import React from "react";
import Title from "./Title";
import { mission } from "../assets/assets";

const Missions = () => {
  return (
    <div className="py-10 px-4">
        <div className="text-3xl text-center">
 <Title text1={"Our"} text2={"Mission"} />
        </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {mission.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 border h-auto shadow-lg"
          >
            <p className="font-bold italic ">{item.heading} :</p>
            <p className="text-xs tracking-wide text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
