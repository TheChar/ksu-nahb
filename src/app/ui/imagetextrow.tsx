import Image from "next/image";

interface ImageTextRowProps {
  image: string;
  alt?: string;
  children: React.ReactNode;
  imageLeft?: boolean; // if true → image on left, else right
}

export default function ImageTextRow({ image, alt = "", children, imageLeft = true }: ImageTextRowProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 my-10 ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* IMAGE */}
      <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>

      {/* TEXT */}
      <div className="md:w-1/2 text-lg leading-relaxed">{children}</div>
    </div>
  );
}
