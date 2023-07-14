'use client';

import SearchIcon from '@/icons/SearchIcon';

const HeaderSearch = () => {
  return (
    <div
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
          Anywhere
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
          Anyweek
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
          <div className="hidden sm:block">Add guest</div>
          <div
            className="
              p-2
              bg-rose-500
              rounded-full
              text-white
            "
          >
            <SearchIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
