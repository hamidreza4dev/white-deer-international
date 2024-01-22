import Image, { StaticImageData } from 'next/image';
import SvgArtisticLogo from '~/assets/artistic-logo.svg';
import { cn } from '~/utils';

export type ArtisticCardProps = {
  images: StaticImageData[];
  content: React.ReactNode;
  className?: string;
};

const ArtisticCard = ({ images, content, className }: ArtisticCardProps) => {
  return (
    <article
      className={cn(
        'flex flex-col rounded-4xl border border-[#191919] px-8 pb-5 pt-16',
        className,
      )}
    >
      <SvgArtisticLogo />

      <div className="mt-auto">
        <div className="flex gap-4">
          {images.map((img) => (
            <Image
              key={img.src}
              src={img}
              alt=""
              placeholder="blur"
              height={142}
              width={250}
              className="w-1/2 rounded-2xl object-cover object-center"
            />
          ))}
        </div>

        <p className="text-base mt-16 font-500 text-[#989898]">{content}</p>
      </div>
    </article>
  );
};

export default ArtisticCard;
