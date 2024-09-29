import React from 'react';

const NewsCard = ({ title, content, icon }) => {
  return (
     <div className="flex flex-row justify-start hover:scale-105 duration-300 ease-in">
    <div className=" flex flex-col ml-10 mt-5 border-4 border-[#FFAA2B] h-80 w-80 rounded-lg p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-700">{content}</p>
    </div>
    </div>
  );
};

export default NewsCard;
