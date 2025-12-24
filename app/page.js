import Image from "next/image";
import HERO from "../public/hero.png"
import Button from "@/components/button/Button";

export default function Home() {
  return (
  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]">
    <div className="flex-1 flex flex-col gap-6 lg:gap-12.5">
      <h1 className="text-4xl sm:text-5xl lg:text-[72px] bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent font-bold">
        Better design for your digital products.
      </h1>
      <p className="text-lg sm:text-xl lg:text-[24px] font-light">
        Turning your idea into Reality. We bring Together the teams from the global teach industry.
      </p>
      <Button url="/portfolio" text="See Our Works" />
    </div>
    <div className="flex-1 flex flex-col gap-6 lg:gap-12.5">
      <Image src={HERO} alt="" className="image w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain" />
    </div>
</div>
  );
}
