// import { Card } from "@/components/card";

import { CategoryCard } from "@/components/categoryCard";
import Image from "next/image";

const CATEGORIES = [
  {
    id: "maq",
    title: "Maquiagem",
    imageSrc: "/image/teste-bg7.png",
    altText: "Categoria Maquiagem",
  },
  {
    id: "skin",
    title: "Skincare",
    imageSrc: "/image/teste-bg11.png",
    altText: "Categoria Skincare",
  },
  {
    id: "cab",
    title: "Cabelo",
    imageSrc: "/image/cabelo-teste.jpeg",
    altText: "Categoria Cabelo",
  },
  {
    id: "perf",
    title: "Perfume",
    imageSrc: "/image/perfume.jpeg",
    altText: "Categoria Perfume",
  },
  {
    id: "rot",
    title: "Rotina",
    imageSrc: "/image/rotina.png",
    altText: "Categoria Rotina",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white/85 w-full h-full">
      <div className="flex justify-between border-b border-[#464141] text-[#2D2D2D] pl-4.5 pr-4.5 pt-14 pb-4">
        <div className="text-2xl">Menu</div>
        <div className="font-syne font-extrabold font text-2xl bg-amber-300">
          SKINBOXD
        </div>
        <div className="text-2xl">Foto</div>
      </div>
      <div className="grid grid-cols-2 gap-2 gap-y-4 pl-4.5 pr-4.5 pt-7">
        {CATEGORIES.map((category, index) => {
          const isLast = index === CATEGORIES.length - 1;
          return (
            <CategoryCard
              key={category.id}
              title={category.title}
              imageSrc={category.imageSrc}
              altText={category.altText}
              sizeClassName={
                isLast ? "col-span-2 aspect-[2/1] h-44" : "aspect-[3/4]"
              }
            />
          );
        })}
      </div>
    </main>
  );
}
