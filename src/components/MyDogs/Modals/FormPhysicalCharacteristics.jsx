import { Select, NumberInput, TextInput } from '@mantine/core';

const FormPhysicalCharacteristics = ({ form }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-y-5">
        <NumberInput
          placeholder="Age"
          label="Age"
          withAsterisk
          hideControls
          {...form.getInputProps('age')}
        />
        <Select
          label="Gender"
          placeholder="Gender"
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ]}
          {...form.getInputProps('gender')}
        />
        <NumberInput
          placeholder="Height"
          label="Height"
          withAsterisk
          hideControls
          {...form.getInputProps('height')}
        />
        <NumberInput
          placeholder="Weight"
          label="Weight"
          withAsterisk
          hideControls
          {...form.getInputProps('weight')}
        />
        <TextInput
          placeholder="Color"
          label="Color"
          withAsterisk
          {...form.getInputProps('color')}
        />
      </div>
    </div>
  );
};

export default FormPhysicalCharacteristics;
