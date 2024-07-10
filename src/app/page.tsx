import { outfit } from "@/fonts";
import { AcademicCap, AcademicCapMini, AcademicCapOutline } from "@/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div>Test</div>
      <div className={outfit.className}>Test</div>
      <AcademicCapMini />
      <AcademicCap />
      <AcademicCapOutline />
    </main>
  );
}
