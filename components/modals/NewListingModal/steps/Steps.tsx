import dynamic from 'next/dynamic';
import { useStepsContext } from '../context/StepsContext';

const stepComponent = [
  dynamic(() => import(`./CategoryStep`)),
  dynamic(() => import(`./LocationStep`)),
  dynamic(() => import(`./InfoStep`)),
  dynamic(() => import(`./ImageStep`)),
  dynamic(() => import(`./DescriptionStep`)),
];

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
