import { Affix, rem } from '@mantine/core';
import CustomLottie from '@/components/CustomLottie';
import { dogFlirtingAnimation } from '../../../../dev-data/dogsAnimation';
import React from 'react';

const FlirtingDog = React.memo(() => {
  return (
    <Affix position={{ top: rem(5), right: rem(20) }}>
      <CustomLottie animationData={dogFlirtingAnimation} />
    </Affix>
  );
});

export default FlirtingDog;
