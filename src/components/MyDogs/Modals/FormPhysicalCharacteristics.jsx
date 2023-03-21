import { Select, NumberInput, TextInput } from '@mantine/core';

const FormPhysicalCharacteristics = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-y-5">
        <NumberInput placeholder="Age" label="Age" withAsterisk hideControls />
        <Select
          label="Gender"
          placeholder="Gender"
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ]}
        />
        <NumberInput placeholder="Height" label="Height" withAsterisk hideControls />
        <NumberInput placeholder="Width" label="Width" withAsterisk hideControls />
        <TextInput placeholder="Color" label="Color" withAsterisk />
      </div>
    </div>
  );
};

export default FormPhysicalCharacteristics;
