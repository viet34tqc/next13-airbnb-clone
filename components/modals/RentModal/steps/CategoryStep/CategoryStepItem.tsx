import { IconType } from '@react-icons/all-files';

type Props = {
  label: string;
  icon: IconType;
};

const CategoryStepItem = ({ label, icon: Icon }: Props) => {
  return (
    <div
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
      `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryStepItem;
