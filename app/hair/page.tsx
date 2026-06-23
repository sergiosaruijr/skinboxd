import FooterSkinBoxd from "@/components/footer";
import { ProductCard } from "@/components/productCard";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "1",
    title: "Nutri Enrich",
    imageSrc: "/image/product-hair2.png",
    altText: "Categoria Hair",
    brand: "Wella",
  },
  {
    id: "2",
    title: "Nutri Enrich",
    imageSrc: "/image/product-hair2.png",
    altText: "Categoria Hair",
    brand: "Wella",
  },
  {
    id: "3",
    title: "Nutri Enrich",
    imageSrc: "/image/product-hair2.png",
    altText: "Categoria Hair",
    brand: "Wella",
  },
  {
    id: "4",
    title: "Nutri Enrich",
    imageSrc: "/image/product-hair2.png",
    altText: "Categoria Hair",
    brand: "Wella",
  },
  {
    id: "5",
    title: "Nutri Enrich",
    imageSrc: "/image/product-hair2.png",
    altText: "Categoria Hair",
    brand: "Wella",
  },
];

export default function HairPage() {
  return (
    <main className="bg-white/85 w-full min-h-screen flex flex-col">
      <div className="flex justify-between border-b border-[#464141] text-[#2D2D2D] pl-4.5 pr-4.5 pt-14 pb-4">
        <div className="text-2xl">Menu</div>
        <Link
          href="/home"
          className="font-syne font-extrabold font text-2xl bg-amber-300"
        >
          SKINBOXD
        </Link>
        <div className="text-2xl">Foto</div>
      </div>
      <h1 className="font-syne font-semibold text-2xl px-5 pt-5 text-[#2D2D2D]">
        Cabelo
      </h1>
      <div className="grid grid-cols-2 gap-2 gap-y-4 px-5 pt-5 pb-10">
        {PRODUCTS.map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              imageSrc={product.imageSrc}
              brand={product.brand}
              altText={product.altText}
            />
          );
        })}
      </div>
      <FooterSkinBoxd />
    </main>
  );
}
