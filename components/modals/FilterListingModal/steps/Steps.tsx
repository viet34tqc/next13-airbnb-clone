import dynamic from 'next/dynamic';
import { useStepsContext } from '../../context/StepsContext';
import { FILTER_STEPS } from '../constants';

const stepComponent = FILTER_STEPS.map(step =>
  dynamic(() => import(`./${step}`))
);

const Steps = () => {
  const { step } = useStepsContext();
  const Step = stepComponent[step];

  return (
    <div className="flex flex-col gap-8">
      <Step />
    </div>
  );
};

export default Steps;
