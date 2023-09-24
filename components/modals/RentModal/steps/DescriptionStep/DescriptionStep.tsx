import FieldControl from '@/components/ui/Form/FieldControl';
import FieldMess from '@/components/ui/Form/FieldMess';
import Input from '@/components/ui/Form/Input';
import Label from '@/components/ui/Form/Label';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import { useFormContext } from 'react-hook-form';

const DescriptionStep = () => {
  const { register } = useFormContext();
  return (
    <>
      <ModalHeading
        title="How would you describe your place?"
        subtitle="Short and sweet works best!"
      />
      <FieldControl>
        <div className="relative">
          <Label>Title</Label>
          <Input {...register('title')} required />
        </div>
        <FieldMess name="title" />
      </FieldControl>
      <FieldControl>
        <div className="relative">
          <Label>Description</Label>
          <Input {...register('description')} required />
        </div>
        <FieldMess name="description" />
      </FieldControl>
      <FieldControl>
        <div className="relative">
          <Label>Price($)</Label>
          <Input type="number" {...register('price')} required min={0} />
        </div>
        <FieldMess name="price" />
      </FieldControl>
    </>
  );
};

export default DescriptionStep;
