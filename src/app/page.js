import Card from "@/components/cards/indexcard";
import AreaChart from "@/components/tile/graphbox";
import NewsCard from "@/components/tile/newsbox";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl ml-10  font-bold ">Indices</h1>    
      <div className="flex flex-row justify-start">
        <Card title="Sensex" content="+5124" Points="Point 1"/>
        <Card title="Nifty 50" content="+200"/>
        <Card title="Nasdaq" content="+12.56 "/>
        <NewsCard title="News 1" content="Content 4" />
        </div>
        
    </>
  );
}
