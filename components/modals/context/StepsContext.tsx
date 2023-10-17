import { createContext, PropsWithChildren, useContext, useState } from 'react';

type TStepsContextValue = {
  step: number;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
};

export const StepsContext = createContext<TStepsContextValue | null>(null);

const StepsContextProvider = ({ children }: PropsWithChildren) => {
  const [step, setStep] = useState<number>(0);
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const value = {
    step,
    handlePreviousStep,
    handleNextStep,
  };

  return (
    <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
  );
};
export default StepsContextProvider;
export const useStepsContext = () => {
  const context = useContext(StepsContext) as TStepsContextValue;
  if (!context) {
    throw new Error('useStepsContext must be used within a SomethingProvider');
  }
  return context;
};
