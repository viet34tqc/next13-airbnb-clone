'use client';

import RentModal from '@/components/modals/RentModal';
import { useModalStoreActions } from '@/store/useModalStore';
import { User } from 'next-auth';
import UserMenuDropdown from './UserMenuDropdown';

// TODO: Hide User menu when navigate to other pages.
const UserMenu = ({ user }: { user: User | null }) => {
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
        onClick={() => setModalView(!user ? 'LOGIN' : 'RENT')}
      >
        Airbnb your home
      </button>
      <UserMenuDropdown user={user} />
      {/* We render Rent Modal differently to save the selected choice for each step in the modal */}
      <RentModal />
    </div>
  );
};

export default UserMenu;
