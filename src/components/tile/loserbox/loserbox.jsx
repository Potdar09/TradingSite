import React from 'react';

const LoserBox = ({ title, content, icon }) => {
  return (
     <div style={{ width: 850, height: 200 }} className="flex flex-row justify-start">
      <div className="flex flex-col ml-10 mt-5 border-4 border-[#F63C6B] h-40 w-full rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default LoserBox;
