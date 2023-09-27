import FieldMess from '@/components/ui/Form/FieldMess';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import { categories } from '@/modules/HomePage/components/Categories/constants';
import { useFormContext } from 'react-hook-form';
import CategoryStepItem from './CategoryStepItem';

const CategoryStep = () => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <ModalHeading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <FieldMess name="category" className="text-center" />
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
