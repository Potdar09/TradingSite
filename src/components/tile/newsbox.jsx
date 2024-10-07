'use client';
import React, { useEffect, useState } from 'react';

const News = () => {
  const [newsTitle, setNewsTitle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulated network request
      const title = [
        {
          id: 1,
          ticker:'AAPL',
          title: "Trucking group leader calls for political intervention amid ongoing port strike"
        },
        {
          id: 2,
          ticker:'TSLA',
          title: "US offers EVgo conditional $1.05 billion loan for EV chargers"
        },
        {
          id: 3,
          ticker:'RELA',
          title: "US announces new EVgo loan for EV chargers"
        },
        {
          id: 4,
          ticker:'GOOGL',
          title: "Why Kamala Harris says we need a national reserve for critical minerals"
        }
      ];

      setNewsTitle(title);
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-row justify-start hover:scale-105 duration-300 ease-in">
      <div className="flex flex-col ml-10 mr-10 mt-5 bg-[#16181B] h-80 w-full rounded-lg p-3 shadow-lg overflow-hidden">
        {newsTitle.slice(0,3).map((newsItem) => (
          <>
          <div key={newsItem.id} className='text-white font-semibold text-xl p-3 border-b border-[#2b2b32]'>
            {newsItem.title}
            <div className='text-white text-[1rem] font-normal border border-[#2b2b32] rounded-xl'>
              {newsItem.ticker}
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default News;
