'use client';

import UserAvatar from '@/components/UserAvatar';
import Map from '@/components/shared/Map';
import useCountries from '@/hooks/useCountries';
import { Category } from '@/lib/types/category';
import { User } from '@prisma/client';
import ListingCategory from './ListingCategory';

type Props = {
  user: User;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category?: Category;
  locationValue: string;
};

const ListingInfo = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}: Props) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <div
          className="
            text-xl
            font-semibold
            flex
            items-center
            gap-2
          "
        >
          <h3>Hosted by {user?.name}</h3>
          <UserAvatar userImage={user?.image} />
        </div>
        <div
          className="
            flex
            flex-row
            items-center
            gap-4
            font-light
            text-neutral-500
          "
        >
          <span>{guestCount} guests</span>
          <span>{roomCount} rooms</span>
          <span>{bathroomCount} bathrooms</span>
        </div>
      </section>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <section className="text-lg font-light text-neutral-500">{description}</section>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
