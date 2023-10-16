import dynamic from 'next/dynamic';
import { useStepsContext } from '../../context/StepsContext';
import { filterStepsValidation } from '../constants';

const stepComponent = Object.keys(filterStepsValidation).map(step =>
  dynamic(() => import(`./${step}`))
);

const Steps = () => {
  const { step } = useStepsContext();
  const Step = stepComponent[step];

  return (
    <div className="flex flex-col gap-4">
      <Step />
    </div>
  );
};

export default Steps;
