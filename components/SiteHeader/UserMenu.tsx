'use client';

/*
TODO
- Dropdown menu is not good, replace it with radix dropdown
*/

import BarIcon from '@/icons/BarIcon';
import UserCircleIcon from '@/icons/UserCircleIcon';
import { useModalStoreActions } from '@/store/useModalStore';
import { useState } from 'react';
import {
  CustomDropdown,
  CustomDropdownContent,
  CustomDropdownTrigger,
} from '../ui/DropDown';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setModalView, setIsOpen } = useModalStoreActions();

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
        <CustomDropdown open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <CustomDropdownTrigger
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
          </CustomDropdownTrigger>
          <CustomDropdownContent
            align="end"
            className="
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-[200px]
            md:right-8
            bg-white
            overflow-hidden
            text-sm
          "
          >
            <div className="flex flex-col cursor-pointer">
              <MenuItem
                label="Login"
                onClick={() => {
                  setIsDropdownOpen(false)
                  setIsOpen(), setModalView('LOGIN');
                }}
              />
              <MenuItem
                label="Sign up"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsOpen(), setModalView('REGISTER');
                }}
              />
            </div>
          </CustomDropdownContent>
        </CustomDropdown>
      </div>
    </div>
  );
};

export default UserMenu;
