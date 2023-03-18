import { TextInput, NumberInput, Select, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const FormPersonalInfo = ({ form }) => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* First Children */}
      <div className="w-full flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:gap-x-5">
        <TextInput
          {...form.getInputProps('firstName')}
          placeholder="Your first name"
          label="First name"
          withAsterisk
          className="grow"
        />
        <TextInput
          {...form.getInputProps('lastName')}
          placeholder="Your last name"
          label="Last name"
          withAsterisk
          className="grow"
        />
      </div>

      {/* Second Children */}
      <div>
        <TextInput
          {...form.getInputProps('email')}
          placeholder="Your email"
          label="Email"
          withAsterisk
          className="grow"
        />
      </div>

      {/* Third Children */}
      <div className="flex flex-col gap-y-5 sm:justify-between sm:gap-x-5 sm:flex-row sm:gap-y-0 lg:justify-start">
        <div>
          <p className="text-sm">Birth Date</p>
          <DatePicker
            {...form.getInputProps('birthDate')}
            // onChange={dateToAge}
            // value={form.values.birthDate}
            allowDeselect
          />
        </div>

        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-y-0 lg:gap-x-5">
          <NumberInput
            disabled
            {...form.getInputProps('age')}
            placeholder="Your age"
            label="Your age"
            withAsterisk
          />

          <Select
            {...form.getInputProps('gender')}
            label="Gender"
            placeholder="Gender"
            data={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' }
            ]}
          />
          <NumberInput
            {...form.getInputProps('phoneNumber')}
            maxLength={10}
            placeholder="Phone number"
            label="Phone number"
            withAsterisk
            parser={(value) => {
              const parsedValue = value.replace(/\D/g, '');
              return parsedValue.startsWith('0') ? parsedValue.slice(1) : parsedValue;
            }}
            hideControls
            icon={<Text>+63</Text>}
          />
        </div>
      </div>
    </div>
  );
};

export default FormPersonalInfo;
