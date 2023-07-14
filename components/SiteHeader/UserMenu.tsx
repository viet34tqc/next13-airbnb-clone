'use client';

import BarIcon from '@/icons/BarIcon';
import UserCircleIcon from '@/icons/UserCircleIcon';

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          Airbnb your home
        </button>

        <div
          onClick={() => {}}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          "
        >
          <BarIcon />
          <div className="hidden md:block text-gray-400">
            <UserCircleIcon fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
