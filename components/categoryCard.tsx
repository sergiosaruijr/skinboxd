import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  altText: string;
  urlPage?: string | undefined;
  sizeClassName?: string;
}

export function CategoryCard({
  title,
  imageSrc,
  altText,
  urlPage,
  sizeClassName = "",
}: CategoryCardProps) {
  return (
    <Link
      className={`relative group overflow-hidden rounded-2xl cursor-pointer w-full ${sizeClassName}`}
      href={urlPage || "/"}
    >
      {/* ── IMAGEM DE FUNDO ── */}

      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="(max-w-768px) 100vw, 300px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        priority
      />

      {/* ── OVERLAY ESCURECIDO ── */}
      <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />

      {/* ── TEXTO CENTRALIZADO ── */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h3 className="font-syne font-semibold text-2xl text-white tracking-wide text-center drop-shadow-md antialiased select-none">
          {title}
        </h3>
      </div>
    </Link>
  );
}
