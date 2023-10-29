'use client';

import useCountries from '@/hooks/useCountries';
import { useModalStoreActions } from '@/store/useModalStore';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { differenceInDays } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const HeaderSearch = () => {
  const { setModalView } = useModalStoreActions();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get('locationValue');
  const startDate = params?.get('startDate');
  const endDate = params?.get('endDate');
  const guestCount = params?.get('guestCount');

  const locationLabel = locationValue
    ? getByValue(locationValue as string)?.label
    : 'Anywhere';

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return 'Any Week';
  }, [startDate, endDate]);

  const guestLabel = guestCount ? `${guestCount} Guests` : 'Add Guests';

  return (
    <div
      onClick={() => setModalView('FILTER_LISTING')}
      className="
        sm:border-[1px]
        sm:py-2
        sm:px-6
        rounded-full
        sm:shadow-sm
        sm:hover:shadow-md
        transition
        cursor-pointer
        ml-auto
        mr-2
        sm:m-0
      "
    >
      <div className="flex flex-row items-center justify-between">
        <div
          className="
            hidden sm:block
            text-sm
            font-semibold
            pr-6
          "
        >
          {locationLabel}
        </div>
        <div
          className="
            hidden sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center
          "
        >
          {durationLabel}
        </div>
        <div
          className="
            hidden sm:block
            text-sm
            pl-6
            pr-2
            text-gray-600
          "
        >
          {guestLabel}
        </div>
        <div
          className="
              p-2
              bg-rose-500
              rounded-full
              text-white
            "
        >
          <MagnifyingGlassIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
