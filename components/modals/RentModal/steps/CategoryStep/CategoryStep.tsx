import { categories } from '@/components/home/Categories/constants';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import CategoryStepItem from './CategoryStepItem';

type Props = {};

const CategoryStep = (props: Props) => {
  return (
    <>
      <ModalHeading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map(item => (
          <div key={item.label} className="col-span-1">
            <CategoryStepItem label={item.label} icon={item.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryStep;
