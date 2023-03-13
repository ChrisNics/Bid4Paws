import {
  Tabs,
  TextInput,
  NumberInput,
  Tooltip,
  Select,
  Text,
  PasswordInput,
  Button
} from '@mantine/core';
import showNotification from '../../lib/showNotification';
import phoneChecker from '../../lib/phoneChecker';
import { DatePicker } from '@mantine/dates';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import useCurrentUser from '@/store/useCurrentUser';
import { current } from 'tailwindcss/colors';
import SingleImageDropZone from '@/components/SingleImageDropZone';
import Image from 'next/image';
import passwordChecker from '../../lib/passwordChecker';

const MyAccount = () => {
  const { currentUser, setCurrentUser } = useCurrentUser((state) => ({
    currentUser: state.currentUser,
    setCurrentUser: state.setCurrentUser
  }));
  const [tab, setTab] = useState('Personal Information');

  const formPersonalInfo = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      birthDate: '',
      age: '',
      gender: ''
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
        city: '',
        province: '',
        street: '',
        postalCode: '',
        barangay: '',
        geocoding: { landmark: '', coordinates: [] }
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

  const formLoginCredentials = useForm({
    initialValues: {
      username: '',
      password: '',
      passwordConfirm: '',
      passwordCurrent: '',
      avatar: ''
    },

    validate: {
      username: (value) => (value ? null : 'Please provide this field'),
      avatar: (value) => (value ? null : 'Please provide your avatar'),
      password: (value) => (passwordChecker(value) ? passwordChecker(value) : null),
      passwordConfirm: (value) => (value ? null : 'Please provide this field')
    }
  });

  const updateUser = async (values) => {
    console.log(values);
    const res = await fetch(`/api/user/${currentUser._id}`, {
      method: 'PATCH',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      const errorData = await res.json();
      showNotification({
        title: 'Invalid Credentials',
        message: errorData.message,
        color: 'red'
      });
      return;
    }

    const { data, message } = await res.json();
    console.log(data);
    setCurrentUser(data);
    showNotification({
      title: 'Success',
      message: message,
      color: 'green'
    });
  };

  const handleSubmit =
    tab === 'Personal Information'
      ? formPersonalInfo.onSubmit(async (values) => updateUser(values))
      : tab === 'Address'
      ? formAddress.onSubmit(async (values) => updateUser(values))
      : formLoginCredentials.onSubmit(async (values) => updateUser(values));

  useEffect(() => {
    if (!currentUser) return; // Guard Clause
    formPersonalInfo.setValues({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      age: currentUser.age,
      gender: currentUser.gender,
      phoneNumber: currentUser.phoneNumber,
      birthDate: currentUser.birthDate
    });

    formAddress.setValues({
      address: {
        city: currentUser.address.city,
        province: currentUser.address.province,
        street: currentUser.address.street,
        postalCode: currentUser.address.postalCode,
        barangay: currentUser.address.barangay
      }
    });

    formLoginCredentials.setValues({
      username: currentUser.username,
      avatar: currentUser.avatar
    });
  }, [currentUser]);

  return (
    <div className="container mx-auto p-5">
      <div className="mb-10">
        <h3 className="font-mono text-md">My Account</h3>
      </div>
      <Tabs
        defaultValue="Personal Information"
        activateTabWithKeyboard={true}
        onTabChange={(i) => setTab(i)}>
        <Tabs.List>
          <Tabs.Tab value="Personal Information" icon={<IconPhoto size="0.8rem" />}>
            Personal Information
          </Tabs.Tab>
          <Tabs.Tab value="Address" icon={<IconMessageCircle size="0.8rem" />}>
            Address
          </Tabs.Tab>
          <Tabs.Tab value="Login credentials" icon={<IconSettings size="0.8rem" />}>
            Login credentials
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Personal Information" pt="xs">
          <div className="flex flex-col gap-y-5">
            {/* First Children */}
            <div className="w-full flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:gap-x-5">
              <TextInput
                {...formPersonalInfo.getInputProps('firstName')}
                placeholder="Your first name"
                label="First name"
                withAsterisk
                className="grow"
              />
              <TextInput
                {...formPersonalInfo.getInputProps('lastName')}
                placeholder="Your last name"
                label="Last name"
                withAsterisk
                className="grow"
              />
            </div>

            {/* Second Children */}
            <div>
              <TextInput
                {...formPersonalInfo.getInputProps('email')}
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
                  {...formPersonalInfo.getInputProps('birthDate')}
                  // onChange={dateToAge}
                  // value={form.values.birthDate}
                  allowDeselect
                />
              </div>

              <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-y-0 lg:gap-x-5">
                <NumberInput
                  disabled
                  {...formPersonalInfo.getInputProps('age')}
                  placeholder="Your age"
                  label="Your age"
                  withAsterisk
                />

                <Select
                  {...formPersonalInfo.getInputProps('gender')}
                  label="Gender"
                  placeholder="Gender"
                  data={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' }
                  ]}
                />
                <NumberInput
                  {...formPersonalInfo.getInputProps('phoneNumber')}
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
        </Tabs.Panel>

        <Tabs.Panel value="Address" pt="xs">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5 md:flex md:flex-row md:gap-y-0 md:gap-x-5">
              <TextInput
                {...formAddress.getInputProps('address.city')}
                placeholder="City"
                label="City"
                withAsterisk
                className="grow"
              />
              <TextInput
                {...formAddress.getInputProps('address.province')}
                placeholder="Province"
                label="Province"
                withAsterisk
                className="grow"
              />
            </div>

            <div className="flex flex-col gap-y-5 md:flex md:flex-row md:gap-y-0 md:gap-x-5">
              <TextInput
                {...formAddress.getInputProps('address.street')}
                placeholder="Street Address"
                label="Street Address"
                withAsterisk
                className="grow"
              />
              <TextInput
                {...formAddress.getInputProps('address.barangay')}
                placeholder="Barangay"
                label="Barangay"
                withAsterisk
                className="grow"
              />
              <NumberInput
                maxLength={4}
                {...formAddress.getInputProps('address.postalCode')}
                placeholder="Postal Code"
                label="Postal Code"
                withAsterisk
                className="grow"
                hideControls
                parser={(value) => {
                  const parsedValue = value.replace(/\D/g, '');
                  return parsedValue;
                }}
              />
            </div>

            {/* form.setValues((prev) => ({ ...prev, ...values })); */}
            {/* <MapboxComponent
              lng={lng}
              lat={lat}
              zoom={zoom}
              setLng={setLng}
              setLat={setLat}
              setZoom={setZoom}
              onAddressChange={{
                landmark: (value) => form.setFieldValue('address.geocoding.landmark', value),
                coordinates: (value) => form.setFieldValue('address.geocoding.coordinates', value)
              }}
            /> */}
            <Tooltip
              label="Location information is necessary for our app's matchmaking feature to work properly."
              position="top-start">
              <p className="text-xs text-orange-500 cursor-pointer">Why we need this?</p>
            </Tooltip>

            <TextInput
              // {...form.getInputProps('address.geocoding.landmark')}
              placeholder="Nearest Landmark"
              label="Nearest Landmark"
              withAsterisk
              className="grow"
              disabled
            />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="Login credentials" pt="xs">
          <div className="flex flex-col gap-y-5">
            <div className="flex justify-center items-center">
              <div className="max-w-sm flex flex-col gap-y-5">
                <div className="relative border rounded-full h-60 w-60 overflow-hidden">
                  <Image
                    priority
                    fill
                    alt="image"
                    src={
                      formLoginCredentials.values.avatar
                        ? formLoginCredentials.values.avatar
                        : 'https://uploads.commoninja.com/searchengine/wordpress/random-avatars-of-user.png'
                    }
                    // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
                  />
                </div>
                <SingleImageDropZone
                  title="avatar"
                  hooks={(value) => formLoginCredentials.setFieldValue('avatar', value)}
                />
                {formLoginCredentials.errors.avatar && (
                  <div>
                    <p className="text-sm text-red-500">{formLoginCredentials.errors.avatar}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <TextInput
                {...formLoginCredentials.getInputProps('username')}
                placeholder="Username"
                label="Username"
                withAsterisk
              />
              <PasswordInput
                {...formLoginCredentials.getInputProps('passwordCurrent')}
                placeholder="Current Password"
                label="Current Password"
                withAsterisk
              />
              <PasswordInput
                {...formLoginCredentials.getInputProps('password')}
                placeholder="Password"
                label="Password"
                description="Password must include at least one letter, number and special character"
                withAsterisk
              />
              <PasswordInput
                {...formLoginCredentials.getInputProps('passwordConfirm')}
                placeholder="Password Confirm"
                label="Password Confirm"
                withAsterisk
              />
            </div>
          </div>
        </Tabs.Panel>
      </Tabs>

      <div className="mt-10 flex justify-center items-center md:justify-start">
        <div className="grow flex flex-col gap-y-5 md:flex-row md:gap-y-0 md:gap-x-5 md:max-w-md">
          <Button variant="outline" color="orange" fullWidth>
            Back
          </Button>
          <Button color="orange" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
