import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid';
import { useFormContext, useWatch } from 'react-hook-form';

type Props = {
  name: string;
  title: string;
  subtitle: string;
};

const InfoStepCounter = ({ name, title, subtitle }: Props) => {
  const value = useWatch({ name });
  const { setValue } = useFormContext();

  const handleMinus = () => {
    if (value === 1) return;
    setValue(name, value - 1);
  };

  const handlePlus = () => {
    setValue(name, value + 1);
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <div className="font-medium">{title}</div>
          <div className="font-light text-gray-600">{subtitle}</div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div
            onClick={handleMinus}
            className="
            w-10
            h-10
            rounded-full
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-pointer
            hover:opacity-80
            transition
          "
          >
            <MinusSmallIcon className="h-6 w-6 text-gray-500" />
          </div>
          <div
            className="
            font-light
            text-xl
            w-5
            text-center
            text-neutral-600
          "
          >
            {value}
          </div>
          <div
            onClick={handlePlus}
            className="
            w-10
            h-10
            rounded-full
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-pointer
            hover:opacity-80
            transition
          "
          >
            <PlusSmallIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoStepCounter;
