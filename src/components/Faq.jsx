import React, { useState } from "react";
import { faq } from "../assets/assets";
import { MdAdd } from "react-icons/md";
import Title from "./Title";

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
        <div className=" text-3xl  text-center">       
                <Title text1={"Frequently Asked "} text2={"Questions"}/>
        </div>

      <div className="flex flex-col gap-4">
        {faq.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-200 transition-all duration-300"
          >
            <button
              className="w-full text-left py-4 px-2 flex justify-between items-center text-gray-800 hover:text-[#053052] focus:outline-none"
              onClick={() => toggleAnswer(item.id)}
            >
              <span className="font-medium text-sm ">{item.question}</span>
              <MdAdd
                className={`text-2xl transition-transform duration-300 transform ${activeId === item.id ? "rotate-45" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeId === item.id
                  ? "max-h-96 opacity-100 py-4"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              <p className="text-gray-600 px-2  text-[12px] tracking-wide ">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;