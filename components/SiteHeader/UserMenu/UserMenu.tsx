'use client';

/*
TODO
- Dropdown menu is not good, replace it with radix dropdown
*/

import { User } from 'next-auth';
import UserMenuDropdown from './UserMenuDropdown';

const UserMenu = ({ user }: { user: User | null }) => {
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
        <UserMenuDropdown user={user} />
      </div>
    </div>
  );
};

export default UserMenu;
