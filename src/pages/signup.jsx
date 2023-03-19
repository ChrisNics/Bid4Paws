import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Stepper,
  Button,
  Group,
  useMantineTheme,
  TextInput,
  NumberInput,
  Select,
  Tooltip,
  Text,
  Textarea,
  PasswordInput
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import phoneChecker from '../../lib/phoneChecker';
import getAge from 'get-age';
import formatDate from '../../lib/formatDate';
import SingleImageDropZone from '@/components/SingleImageDropZone';
import passwordChecker from '../../lib/passwordChecker';
import Image from 'next/image';
import showNotification from '../../lib/showNotification';

const MapboxComponent = dynamic(() => import('@/components/mapBoxComponent'), {
  loading: () => 'Loading...'
});

const Signup = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 1 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const matches = useMediaQuery(`(min-width: ${useMantineTheme().breakpoints.sm})`);

  const [lng, setLng] = useState(121.0529);
  const [lat, setLat] = useState(14.7483);
  const [zoom, setZoom] = useState(9);

  const validates =
    active === 0
      ? {
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
          phoneNumber: (value) => (phoneChecker(`+63${value}`) ? null : 'Invalid PhoneNumber'),

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
      : {
          username: (value) => (value ? null : 'Please provide this field'),
          avatar: (value) => (value ? null : 'Please provide your avatar'),
          password: (value) => (passwordChecker(value) ? passwordChecker(value) : null),
          passwordConfirm: (value) => (value ? null : 'Please provide this field')
        };

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordConfirm: '',
      avatar: '',
      email: '',
      phoneNumber: '',
      birthDate: '',
      age: '',
      gender: '',
      address: {
        city: '',
        province: '',
        street: '',
        postalCode: '',
        barangay: '',
        geocoding: { landmark: '', coordinates: [], type: 'Point' }
      }
    },

    validate: { ...validates }
  });

  const handleSubmit = form.onSubmit(async (values) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      const errorData = await res.json();
      showNotification({ title: 'Invalid Credentials', message: errorData.message, color: 'red' });
      return;
    }

    const data = await res.json();
    showNotification({
      title: 'Success',
      message: 'Hooray! You have successfully created an account.',
      color: 'green'
    });
  });

  const dateToAge = (birthDate) => {
    const formattedDate = formatDate(birthDate);
    const age = getAge(formattedDate);

    form.setFieldValue('birthDate', birthDate);
    form.setFieldValue('age', age);
  };

  return (
    <section>
      <div className="container mx-auto sm:p-10 lg:p-5">
        <div className="text-center mt-10 mb-20">
          <h1 className="font-mono text-orange-500 ">Registration Page</h1>
          <p>
            Already have an account?{' '}
            <span className=" text-orange-500 cursor-pointer hover:text-orange-400 hover:underline transition duration-75">
              <Link href="/signin" legacyBehavior>
                <a>Sign-in</a>
              </Link>
            </span>
          </p>
        </div>
        <Stepper
          color="orange"
          active={active}
          onStepClick={setActive}
          breakpoint="xs"
          orientation={!matches ? 'vertical' : 'horizontal'}>
          <Stepper.Step label="First step" description="Personal Information">
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
                    onChange={dateToAge}
                    value={form.values.birthDate}
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

              <div className="flex flex-col gap-y-5 md:flex md:flex-row md:gap-y-0 md:gap-x-5">
                <TextInput
                  {...form.getInputProps('address.city')}
                  placeholder="City"
                  label="City"
                  withAsterisk
                  className="grow"
                />
                <TextInput
                  {...form.getInputProps('address.province')}
                  placeholder="Province"
                  label="Province"
                  withAsterisk
                  className="grow"
                />
              </div>

              <div className="flex flex-col gap-y-5 md:flex md:flex-row md:gap-y-0 md:gap-x-5">
                <TextInput
                  {...form.getInputProps('address.street')}
                  placeholder="Street Address"
                  label="Street Address"
                  withAsterisk
                  className="grow"
                />
                <TextInput
                  {...form.getInputProps('address.barangay')}
                  placeholder="Barangay"
                  label="Barangay"
                  withAsterisk
                  className="grow"
                />
                <NumberInput
                  maxLength={4}
                  {...form.getInputProps('address.postalCode')}
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
              <MapboxComponent
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
              />
              <Tooltip
                label="Location information is necessary for our app's matchmaking feature to work properly."
                position="top-start">
                <p className="text-xs w-max text-orange-500 cursor-pointer">Why we need this?</p>
              </Tooltip>

              <TextInput
                {...form.getInputProps('address.geocoding.landmark')}
                placeholder="Nearest Landmark"
                label="Nearest Landmark"
                withAsterisk
                className="grow"
                disabled
              />
            </div>
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Login credentials">
            <div className="flex flex-col gap-y-5">
              <div className="flex justify-center items-center">
                <div className="max-w-sm flex flex-col gap-y-5">
                  <div className="relative border rounded-full h-60 w-60 overflow-hidden">
                    <Image
                      priority
                      fill
                      alt="image"
                      src={
                        form.values.avatar
                          ? form.values.avatar
                          : 'https://uploads.commoninja.com/searchengine/wordpress/random-avatars-of-user.png'
                      }
                      // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
                    />
                  </div>
                  <SingleImageDropZone
                    title="avatar"
                    hooks={(value) => form.setFieldValue('avatar', value)}
                  />
                  {form.errors.avatar && (
                    <div>
                      <p className="text-sm text-red-500">{form.errors.avatar}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-5">
                <TextInput
                  {...form.getInputProps('username')}
                  placeholder="Username"
                  label="Username"
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
            </div>
          </Stepper.Step>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          {active === 0 ? (
            <Button onClick={nextStep}>Next step</Button>
          ) : (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </Group>
      </div>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  return {
    props: {} // will be passed to the page component as props
  };
};

export default Signup;
