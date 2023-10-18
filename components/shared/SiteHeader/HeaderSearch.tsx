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
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
      "
    >
      <div className="flex flex-row items-center justify-between">
        <div
          className="
            text-sm
            font-semibold
            px-6
          "
        >
          {locationLabel}
        </div>
        <div
          className="
            hidden
            sm:block
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
            text-sm
            pl-6
            pr-2
            text-gray-600
            flex
            flex-row
            items-center
            gap-3
          "
        >
          <div className="hidden sm:block">{guestLabel}</div>
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
    </div>
  );
};

export default HeaderSearch;
