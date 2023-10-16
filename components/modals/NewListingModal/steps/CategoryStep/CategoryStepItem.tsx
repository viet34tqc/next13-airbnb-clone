import { IconType } from '@react-icons/all-files';
import { useFormContext, useWatch } from 'react-hook-form';

type Props = {
  label: string;
  icon: IconType;
};

const CategoryStepItem = ({ label, icon: Icon }: Props) => {
  const { setValue } = useFormContext();
  const category = useWatch({ name: 'category' });
  return (
    <div
      onClick={() => setValue('category', label)}
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
        ${label === category ? 'border-black' : 'border-neutral-200'}
      `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryStepItem;
