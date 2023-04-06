import { Tabs, Button } from '@mantine/core';
import showNotification from '../../lib/showNotification';
import phoneChecker from '../../lib/phoneChecker';
import { IconId, IconSettings, IconMapPins } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import passwordChecker from '../../lib/passwordChecker';
import FormPersonalInfo from '@/components/MyAccount/FormPersonalInfo';
import FormAddress from '@/components/MyAccount/FormAddress';
import FormUsernameAndAvatar from '@/components/MyAccount/FormUsernameAndAvatar';
import FormChangePassword from '@/components/MyAccount/FormChangePassword';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import useCurrentUser from '@/store/useCurrentUser';

const MyAccount = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const [tab, setTab] = useState('Personal Information');

  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));
  const formPersonalInfo = useForm({
    initialValues: {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      age: currentUser.age,
      gender: currentUser.gender,
      phoneNumber: currentUser.phoneNumber,
      birthDate: currentUser.birthDate
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

  const formAddress = useForm({
    initialValues: {
      address: {
        city: currentUser.address.city,
        province: currentUser.address.province,
        street: currentUser.address.street,
        postalCode: currentUser.address.postalCode,
        barangay: currentUser.address.barangay,
        geocoding: {
          coordinates: currentUser.address.geocoding.coordinates,
          landmark: currentUser.address.geocoding.landmark,
          type: 'Point'
        }
      }
    },

    validate: {
      address: {
        city: (value) => (value ? null : 'Please provide this field'),
        province: (value) => (value ? null : 'Please provide this field'),
        street: (value) => (value ? null : 'Please provide this field'),
        postalCode: (value) => (value ? null : 'Please provide this field'),
        barangay: (value) => (value ? null : 'Please provide this field'),
        geocoding: {
          landmark: (value) => (value ? null : 'Please provide this field')
        }
      }
    }
  });

  const formUsernameAndAvatar = useForm({
    initialValues: {
      username: currentUser.username,
      avatar: currentUser.avatar
    },

    validate: {
      username: (value) => (value ? null : 'Please provide this field'),
      avatar: (value) => (value ? null : 'Please provide your avatar')
    }
  });

  const formChangePassword = useForm({
    initialValues: {
      passwordCurrent: '',
      password: '',
      passwordConfirm: ''
    },

    validate: {
      passwordCurrent: (value) => (value ? null : 'Please provide this field'),
      password: (value) => (passwordChecker(value) ? passwordChecker(value) : null),
      passwordConfirm: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null
    }
  });

  const updateUser = async (values) => {
    const url =
      tab === 'Change Password'
        ? `/api/auth/changePassword/${currentUser._id}`
        : `/api/user/${currentUser._id}`;

    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to update the user.');
    }

    return await res.json();
  };

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSettled: ({ data, message }) => {
      queryClient.invalidateQueries(['currentUser', session?.id]);
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

  const handleSubmit =
    tab === 'Personal Information'
      ? formPersonalInfo.onSubmit((values) => updateUserMutation.mutate(values))
      : tab === 'Address'
      ? formAddress.onSubmit((values) => updateUserMutation.mutate(values))
      : tab === 'Change Password'
      ? formChangePassword.onSubmit((values) => updateUserMutation.mutate(values))
      : formUsernameAndAvatar.onSubmit((values) => updateUserMutation.mutate(values));

  return (
    <div className="container mx-auto p-5">
      <div className="mb-10">
        <h3 className="font-mono text-md">My Account</h3>
      </div>
      <Tabs
        defaultValue="Personal Information"
        color="orange"
        activateTabWithKeyboard={true}
        onTabChange={(i) => setTab(i)}>
        <Tabs.List>
          <Tabs.Tab value="Personal Information" icon={<IconId size="0.8rem" />}>
            Personal Information
          </Tabs.Tab>
          <Tabs.Tab value="Address" icon={<IconMapPins size="0.8rem" />}>
            Address
          </Tabs.Tab>
          <Tabs.Tab value="Username and Avatar" icon={<IconSettings size="0.8rem" />}>
            Username and Avatar
          </Tabs.Tab>
          <Tabs.Tab value="Change Password" icon={<IconSettings size="0.8rem" />}>
            Change Password
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Personal Information" pt="xs">
          <FormPersonalInfo form={formPersonalInfo} />
        </Tabs.Panel>

        <Tabs.Panel value="Address" pt="xs">
          <FormAddress form={formAddress} tab={tab} />
        </Tabs.Panel>

        <Tabs.Panel value="Username and Avatar" pt="xs">
          <FormUsernameAndAvatar form={formUsernameAndAvatar} />
        </Tabs.Panel>

        <Tabs.Panel value="Change Password" pt="xs">
          <FormChangePassword form={formChangePassword} />
        </Tabs.Panel>
      </Tabs>

      <div className="mt-10 flex justify-center items-center md:justify-start">
        <div className="grow flex flex-col gap-y-5 md:flex-row md:gap-y-0 md:gap-x-5 md:max-w-md">
          <Button variant="outline" color="orange" fullWidth>
            Back
          </Button>
          <Button
            color="orange"
            fullWidth
            onClick={handleSubmit}
            loading={updateUserMutation.isLoading}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return {
    props: {}
  };
};

export default MyAccount;
