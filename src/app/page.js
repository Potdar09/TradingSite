import Card from "@/components/cards/indexcard";
import GainerBox from "@/components/tile/gainerbox/gainer";
import InvestBox from "@/components/tile/investments/investmentbox";
import LoserBox from "@/components/tile/loserbox/loserbox";
import NewsCard from "@/components/tile/newsbox";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="text-3xl ml-5 mb-4 font-bold ">Indices</h1>    
          <div className="flex flex-row justify-between ml-5 mr-5">
            
            <Card title="Sensex" points='+522.60' dayChange="+100" dayChangePerc="+0.25" open="52700.40" high="52900.40" low="52300.40" low52wk="52300.40"/>
            <Card title="Nifty 50" points='+522.60' dayChange="+100" dayChangePerc="+0.25" open="52700.40" high="52900.40" low="52300.40" low52wk="52300.40"/>
            <Card title="Nasdaq" points='+522.60' dayChange="+100" dayChangePerc="+0.25" open="52700.40" high="52900.40" low="52300.40" low52wk="52300.40"/>
          
          </div>
          <GainerBox />
      
        </div>
        <div className="flex flex-col w-full">
            <h1 className="text-3xl ml-10 font-bold">Stock News</h1>
            <NewsCard title="News 1" content="Content 4" />
            <h1 className="text-3xl ml-10 mt-5 font-bold ">Investments</h1>
            <InvestBox />
          </div>
      </div>
    </>
  );
}
