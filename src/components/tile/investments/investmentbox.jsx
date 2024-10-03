'use client';
import React, { useEffect, useState } from 'react';

const InvestBox = () => {
  const [currVal, setCurrVal] = useState(0);
  const [totalVal, setTotalVal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API response
    const fetchData = async () => {
      // Simulate a network request
      //await new Promise((resolve) => setTimeout(resolve, 1000));

      // Replace with your simulated data
      const data = {
        currVal: 10000,
        totalVal: 8000,
      };

      setCurrVal(data.currVal);
      setTotalVal(data.totalVal);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const currValColor = currVal < totalVal ? 'text-[#F63C6B]' : 'text-[#0FEDBE]';

  return (
    <div className="flex flex-row justify-start hover:scale-105 duration-300 ease-in">
      <div className="flex flex-row justify-between ml-10 mr-10 mt-5 bg-[#16181B] h-70 w-full rounded-lg p-6 shadow-lg">
        <div className='flex flex-col'>
          <span className={`text-2xl font-bold ${currValColor}`}>
            {`$${currVal}`}
          </span>
          <span className='text-[#999999]'>
            Current Value
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-2xl font-bold'>
            {`$${totalVal}`}
          </span>
          <span className='text-[#999999]'>
            Total Invested
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvestBox;
