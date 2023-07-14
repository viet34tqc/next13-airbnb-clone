'use client';

/*
TODO
- Dropdown menu is not good, replace it with radix dropdown
*/

import BarIcon from '@/icons/BarIcon';
import UserCircleIcon from '@/icons/UserCircleIcon';
import { useReducer } from 'react';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const [isOpen, toggle] = useReducer(state => !state, false);

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
          onClick={toggle}
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

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" onClick={() => {}} />
              <MenuItem label="Sign up" onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
