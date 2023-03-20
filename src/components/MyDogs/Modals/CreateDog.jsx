import { Modal } from 'antd';
import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import { Stepper, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

const CreateDogs = NiceModal.create(() => {
  const modal = useModal();
  const matches = useMediaQuery(`(min-width: ${useMantineTheme().breakpoints.sm})`);
  const [active, setActive] = useState(0);

  return (
    <Modal {...antdModal(modal)} footer={null} width={1000}>
      <div className="container mx-auto p-5">
        <div className="mb-10">
          <h3 className="font-mono text-md">Create New Dog</h3>
        </div>
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
    </Modal>
  );
});

export default CreateDogs;
