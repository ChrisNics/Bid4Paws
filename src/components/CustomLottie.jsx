import React from 'react';
import Lottie from 'lottie-react';

const CustomLottie = ({ animationData }) => {
  return (
    <div className="max-w-[200px] max-h-[200px]">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default React.memo(CustomLottie);
