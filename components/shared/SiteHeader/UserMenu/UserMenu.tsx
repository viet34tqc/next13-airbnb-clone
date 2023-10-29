'use client';

import { UserOrNull } from '@/lib/types/auth';
import { useModalStoreActions } from '@/store/useModalStore';
import UserMenuDropdown from './UserMenuDropdown';

const UserMenu = ({ user }: { user: UserOrNull }) => {
  const { setModalView } = useModalStoreActions();
  return (
    <div className="flex flex-row items-center gap-3">
      <button
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
        onClick={() => setModalView(!user ? 'LOGIN' : 'NEW_LISTING')}
      >
        Airbnb your home
      </button>
      <UserMenuDropdown user={user} />
    </div>
  );
};

export default UserMenu;
