import Image from "next/image";
import AudienceIndexCard from "@/components/AudienceIndexCard";
import IpdComponent from "@/components/IpdComponent";
import TodComponent from "@/components/TodComponent";
import GenderComponent from "@/components/GenderComponent";
import ProgressCard from "@/components/ProgressCard";
import ImpComponent from "@/components/ImpComponent"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-20 px-6 pb-20 sm:px-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <AudienceIndexCard />
      <IpdComponent />
      <TodComponent />
      <GenderComponent />
      <ProgressCard />
      <ImpComponent />
    </div>
  );
}
