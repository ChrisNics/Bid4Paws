import { Stepper, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

const CreateDog = () => {
  const matches = useMediaQuery(`(min-width: ${useMantineTheme().breakpoints.sm})`);
  const [active, setActive] = useState(0);
  return (
    <div className="container mx-auto w-500px">
      <Stepper
        color="orange"
        active={active}
        onStepClick={setActive}
        breakpoint="xs"
        orientation={!matches ? 'vertical' : 'horizontal'}>
        <Stepper.Step label="First step" description="Basic Information">
          <h1>Test</h1>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Physical Characteristics">
          <h1>Test 2</h1>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Additional Information">
          <h1>Test 3</h1>
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default CreateDog;
