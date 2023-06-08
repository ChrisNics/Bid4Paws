import React, { useEffect, useState } from 'react';
import { Blockquote } from '@mantine/core';
import dogFacts from '../../dev-data/dog-facts.json';

function DogFacts({ color = 'white' }) {
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % dogFacts.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentFact = dogFacts[factIndex];

  return (
    <Blockquote cite="– Fact about dogs" mt={50}>
      <div>
        <p className={`font-sans text-sm text-${color} dark:text-[#C1C2C5]`}>{currentFact.fact}</p>
      </div>
    </Blockquote>
  );
}

export default React.memo(DogFacts);
