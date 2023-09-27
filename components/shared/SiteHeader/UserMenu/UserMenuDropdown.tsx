import { siteConfig } from '@/config/siteConfig';
import { useModalStoreActions } from '@/store/useModalStore';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import {
  CustomDropdown,
  CustomDropdownContent,
  CustomDropdownTrigger,
} from '@/components/ui/DropDown';
import MenuItem from '../MenuItem';
type Props = {
  user: User | null;
};

const UserMenuDropdown = ({ user }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setModalView } = useModalStoreActions();

  return (
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
        <Bars3Icon className="w-6" />
        <div className="hidden md:block text-gray-400">
          {user?.image ? (
            <Image width={32} height={32} src={user.image} alt="user avatar" />
          ) : (
            <UserCircleIcon fill="currentColor" className="w-8" />
          )}
        </div>
      </CustomDropdownTrigger>
      <CustomDropdownContent
        align="end"
        className="
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-[200px]
            bg-white
            overflow-hidden
            text-sm
            p-0
          "
      >
        <div className="flex flex-col cursor-pointer">
          {user ? (
            <>
              {siteConfig.mainNav.map(item => (
                <Link key={item.href} href={item.href}>
                  <MenuItem label={item.title} />
                </Link>
              ))}
              <hr />
              <MenuItem
                label="Logout"
                onClick={() => signOut()}
                className="font-normal"
              />
            </>
          ) : (
            <>
              <MenuItem
                label="Login"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setModalView('LOGIN');
                }}
              />
              <MenuItem
                label="Sign up"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setModalView('REGISTER');
                }}
              />
            </>
          )}
        </div>
      </CustomDropdownContent>
    </CustomDropdown>
  );
};

export default UserMenuDropdown;
