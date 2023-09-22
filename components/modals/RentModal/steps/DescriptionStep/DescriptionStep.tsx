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
        <Label>Title</Label>
        <Input {...register('title')} required />
        <FieldMess name="title" />
      </FieldControl>
      <FieldControl>
        <Label>Description</Label>
        <Input {...register('description')} required />
        <FieldMess name="description" />
      </FieldControl>
    </>
  );
};

export default DescriptionStep;
