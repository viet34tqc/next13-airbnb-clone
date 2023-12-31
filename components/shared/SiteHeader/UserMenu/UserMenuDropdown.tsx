import { siteConfig } from '@/config/siteConfig';
import { useModalStoreActions } from '@/store/useModalStore';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useReducer } from 'react';

import UserAvatar from '@/components/UserAvatar';
import {
  CustomDropdown,
  CustomDropdownContent,
  CustomDropdownTrigger,
} from '@/components/ui/DropDown';
import { UserOrNull } from '@/lib/types/auth';
import MenuItem from '../MenuItem';

type Props = {
  user: UserOrNull;
};

const UserMenuDropdown = ({ user }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useReducer(
    state => !state,
    false
  );
  const { setModalView } = useModalStoreActions();

  return (
    <CustomDropdown
      open={isDropdownOpen}
      onOpenChange={() => {
        setTimeout(() => {
          document.body.style.pointerEvents = 'auto';
        }, 0);
        setIsDropdownOpen();
      }}
    >
      <CustomDropdownTrigger
        className="
          p-1
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
          <UserAvatar userImage={user?.image} />
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
                  <MenuItem label={item.title} onClick={setIsDropdownOpen} />
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
                  setIsDropdownOpen();
                  setModalView('LOGIN');
                }}
              />
              <MenuItem
                label="Sign up"
                onClick={() => {
                  setIsDropdownOpen();
                  setModalView('REGISTER');
                }}
              />
              <MenuItem
                label="Website Instruction"
                onClick={() => {
                  setIsDropdownOpen();
                  setModalView('INTRUCTION_MODAL');
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
