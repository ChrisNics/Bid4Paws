import { useDogFacts, getDogFacts } from '@/hooks/useDogFacts';
import { Blockquote, Text } from '@mantine/core';
import React from 'react';

function DogFacts({ color = 'white' }) {
  const { data, isLoading } = useDogFacts();

  return (
    <>
      <Blockquote cite="– Fact about dogs" mt={50}>
        <div>
          <p className={`font-sans text-sm text-${color} dark:text-[#C1C2C5]`}>
            {data?.facts[0] || 'The are 4 constellations named after dogs.'}
          </p>
        </div>
      </Blockquote>
    </>
  );
}

export default React.memo(DogFacts);
