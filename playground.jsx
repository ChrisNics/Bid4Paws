<div className="flex flex-col gap-y-5">
  {/* First Children */}
  <div>
    <TextInput
      {...form.getInputProps('email')}
      placeholder="Name"
      label="Name"
      withAsterisk
      className="grow"
    />
  </div>

  {/* Second Children */}
  <div className="flex flex-col gap-y-5 sm:justify-between sm:gap-x-20 sm:flex-row sm:gap-y-0 lg:justify-start">
    <div>
      <p className="text-sm">Birth Date</p>
      <DatePicker
        {...form.getInputProps('birthDate')}
        onChange={dateToAge}
        value={form.values.birthDate}
        allowDeselect
      />
    </div>
    <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-y-0 lg:gap-x-20 grow xl:justify-around">
      <div className="flex flex-col gap-y-5 lg:w-1/2">
        <NumberInput
          disabled
          {...form.getInputProps('age')}
          placeholder="Age"
          label="Age"
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
          withAsterisk
        />

        <TextInput
          {...form.getInputProps('phoneNumber')}
          maxLength={10}
          placeholder="Breed"
          label="Breed"
          withAsterisk
        />
      </div>
      <div className="flex flex-col gap-y-5 lg:w-1/2">
        <TextInput
          {...form.getInputProps('phoneNumber')}
          maxLength={10}
          placeholder="Bloodline"
          label="Bloodline"
          withAsterisk
        />

        <NumberInput
          maxLength={4}
          {...form.getInputProps('address.postalCode')}
          placeholder="Height"
          label="Height"
          withAsterisk
          hideControls
          parser={(value) => {
            const parsedValue = value.replace(/\D/g, '');
            return parsedValue;
          }}
        />

        <NumberInput
          maxLength={4}
          {...form.getInputProps('address.postalCode')}
          placeholder="Weight"
          label="Weight"
          withAsterisk
          hideControls
          parser={(value) => {
            const parsedValue = value.replace(/\D/g, '');
            return parsedValue;
          }}
        />
      </div>

      <div className="lg:w-1/2">
        <TextInput
          {...form.getInputProps('phoneNumber')}
          maxLength={10}
          placeholder="Colors"
          label="Colors"
          withAsterisk
        />
      </div>
    </div>
  </div>

  {/* Third Children */}

  <div>
    <Textarea placeholder="Caption" label="Caption" withAsterisk />
  </div>
</div>;
