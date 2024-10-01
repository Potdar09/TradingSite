import React from 'react';

const Card = ({ title, content, Points, Open }) => {
  return (
    <div className="flex flex-col">
     <div className="flex flex-row justify-start hover:scale-105 duration-300 ease-in">
    <div className=" flex flex-col ml-10 mt-5 border-4 border-[#0FEDBE] h-40 w-60 rounded-lg p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-3xl font-bold mb-2 text-[#0FEDBE]">{content}</p>
      <p className="text-white">{Points}</p>
      <p className="text-white">{Open}</p>
    </div>
    </div>
    
    </div>
  );
};

export default Card;
