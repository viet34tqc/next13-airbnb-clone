import { UserCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

type Props = {
  userImage?: string | null;
};

const UserAvatar = ({ userImage }: Props) => {
  return userImage ? (
    <Image width={32} height={32} src={userImage} alt="user avatar" />
  ) : (
    <UserCircleIcon fill="currentColor" className="w-8" />
  );
};

export default UserAvatar;
