import Card from "@/components/cards/indexcard";
import GainerBox from "@/components/tile/gainerbox/gainer";
import LoserBox from "@/components/tile/loserbox/loserbox";
import NewsCard from "@/components/tile/newsbox";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="text-3xl ml-10  font-bold ">Indices</h1>    
          <div className="flex flex-row justify-start">
            <Card title="Sensex" content="+5124" Points="Points"/>
            <Card title="Nifty 50" content="+200"/>
            <Card title="Nasdaq" content="+12.56 "/>
          </div>
        </div>
          <div>
            <h1 className="text-3xl ml-10 font-bold ">Stock News</h1>
            <NewsCard title="News 1" content="Content 4" />
          </div>
      </div>
    </>
  );
}
