import Lottie from 'lottie-react';
import { dogKissAnimation } from '../../dev-data/dogsAnimation';
import DogFacts from './DogFacts';
import CustomLottie from './CustomLottie';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center z-50">
      <div className="flex flex-col gap-y-5 justify-center items-center xl:flex-row xl:gap-y-0 xl:gap-x-5">
        <CustomLottie animationData={dogKissAnimation} />

        <DogFacts color="black" />
      </div>
    </div>
  );
};

export default LoadingScreen;
