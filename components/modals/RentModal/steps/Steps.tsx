import { lazy } from 'react';
import { STEPS } from '../constant';
import dynamic from 'next/dynamic';

type Props = {
  step: number;
};

const Steps = ({ step }: Props) => {
  const Step = dynamic(() => import(`./${STEPS[step]}Step`));
  return <div className="flex flex-col gap-8">
    <Step />
  </div>;
};

export default Steps;
