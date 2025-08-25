import React from "react";
import Title from "./Title";
import { team } from "../assets/assets";
const Team = () => {
  return (
    <div>
      <div className="text-3xl text-center ">
        <Title text1={"Our"} text2={"Team"} />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-6  mb-5 lg:w-full ">
        {team.map((item, id) => (
          <div className="" key={id}>
            <img src={item.image} />
            <p className="  text-sm tracking-wide leading-relaxed "> {item.name}</p>
            <p className="text-xs tracking-wide font-bold leading-relaxed"> {item.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
