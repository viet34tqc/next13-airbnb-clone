import { Listing } from '@prisma/client';
import Image from 'next/image';

type Props = {
  imageSrc: Listing['imageSrc'];
  priority: boolean;
};

const ListingCardImg = ({ imageSrc, priority }: Props) => {
  return (
    <div className="aspect-square group relative overflow-hidden rounded-xl">
      <Image
        fill
        priority={priority}
        sizes="(min-width: 768px) 50vw, (min-width: 1200px) 20vw, 100vw"
        className="
          object-cover
          h-full
          w-full
          group-hover:scale-110
          transition
        "
        src={imageSrc}
        alt="Listing"
      />
    </div>
  );
};

export default ListingCardImg;
