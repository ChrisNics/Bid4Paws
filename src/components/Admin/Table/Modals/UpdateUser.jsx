import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import { TextInput, Select, NumberInput, Text, Group, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { Modal } from 'antd';
import { useMutation } from '@tanstack/react-query';
import showNotification from '../../../../../lib/showNotification';
import { useQueryClient } from '@tanstack/react-query';
import phoneChecker from '../../../../../lib/phoneChecker';
import formatDate from '../../../../../lib/formatDate';
import getAge from 'get-age';

const UpdateUserAdmin = NiceModal.create(({ user }) => {
  const modal = useModal();
  const queryClient = useQueryClient();

  const form = useForm({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      birthDate: user.birthDate
    },

    validate: {
      firstName: (value) => (value ? null : 'Please provide this field'),
      lastName: (value) => (value ? null : 'Please provide this field'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) =>
        value < 18
          ? 'You should be atleast 18 years old or above'
          : value > 70
          ? 'Age limit exceeded. The maximum age limit is 70 years old.'
          : null,
      gender: (value) => (value ? null : 'Please provide this field'),
      phoneNumber: (value) => (phoneChecker(`+63${value}`) ? null : 'Invalid PhoneNumber')
    }
  });

  const updateUserMutation = useMutation({
    mutationFn: async (values) => {
      const res = await fetch(`/api/user/${user._id}`, {
        method: 'PATCH',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'An error occurred while updating the user.');
      }

      return await res.json();
    },
    onSettled: ({ data, message }) => {
      // Handle successful data update

      // Refetch query to trigger re-render
      queryClient.invalidateQueries(['all-users']);
      modal.remove();
      showNotification({
        title: 'Success',
        message,
        color: 'green'
      });
    },
    onError: (error) => {
      showNotification({
        title: 'Failed',
        message: error.message,
        color: 'red'
      });
    }
  });

  const handleUpdate = form.onSubmit((values) => {
    updateUserMutation.mutate(values);
  });

  const dateToAge = (birthDate) => {
    const formattedDate = formatDate(birthDate);
    const age = getAge(formattedDate);

    form.setFieldValue('birthDate', birthDate);
    form.setFieldValue('age', age);
  };

  return (
    <Modal {...antdModal(modal)} footer={null}>
      <div className="flex flex-col gap-y-5">
        {/* First Children */}
        <div className="flex w-full flex-col gap-y-5 md:flex-row md:gap-x-5 md:gap-y-0">
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
        <div className="flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:gap-x-5 sm:gap-y-0 lg:justify-start">
          <div>
            <p className="text-sm">Birth Date</p>
            <DatePicker
              {...form.getInputProps('birthDate')}
              onChange={dateToAge}
              value={form.values.birthDate}
              allowDeselect
            />
          </div>

          <div className="flex flex-col gap-y-5">
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
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' }
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

      <Group position="center" mt="xl">
        <Button onClick={handleUpdate} color="orange" loading={updateUserMutation.isLoading}>
          Update
        </Button>
      </Group>
    </Modal>
  );
});

export default UpdateUserAdmin;
