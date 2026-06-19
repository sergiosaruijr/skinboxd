import Image from "next/image";

interface ProductCardProps {
  title: string;
  imageSrc: string;
  altText: string;
  brand: string;
  sizeClassName?: string;
}

export function ProductCard({
  title,
  imageSrc,
  altText,
  brand,
  sizeClassName = "",
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col relative group overflow-hidden rounded-2xl cursor-pointer w-full ${sizeClassName} border-2`}
    >
      <div className=" flex justify-center items-center">
        <Image src={imageSrc} alt={altText} width={150} height={150} />
      </div>
      <div className=" flex flex-col gap-3 px-3 py-3">
        <p className="font-syne font-medium text-sm text-black">
          {brand}
          <br />
          {title}
        </p>
        <div className="flex justify-between text-[#7C7C7C]">
          <p>Estrelas</p>
          <p>Avaliacao</p>
        </div>
      </div>
    </div>
  );
}
