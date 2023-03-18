import { PasswordInput } from '@mantine/core';

const FormChangePassword = ({ form }) => {
  return (
    <div className="flex flex-col gap-y-5">
      <PasswordInput
        {...form.getInputProps('passwordCurrent')}
        placeholder="Current Password"
        label="Password Current"
        withAsterisk
      />
      <PasswordInput
        {...form.getInputProps('password')}
        placeholder="Password"
        label="Password"
        description="Password must include at least one letter, number and special character"
        withAsterisk
      />
      <PasswordInput
        {...form.getInputProps('passwordConfirm')}
        placeholder="Password Confirm"
        label="Password Confirm"
        withAsterisk
      />
    </div>
  );
};

export default FormChangePassword;
