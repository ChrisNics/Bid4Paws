import { Modal } from 'antd';
import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import { Stepper, useMantineTheme, Group, Button } from '@mantine/core';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import FormBasicInformation from './FormBasicInformation';
import FormPhysicalCharacteristics from './FormPhysicalCharacteristics';
import FormAdditionalInformation from './FormAdditionalInformation';
import { useForm } from '@mantine/form';
import useCurrentUser from '@/store/useCurrentUser';
import { useMutation } from '@tanstack/react-query';

const CreateDogs = NiceModal.create(() => {
  const modal = useModal();
  const matches = useMediaQuery(`(min-width: ${useMantineTheme().breakpoints.sm})`);
  const [active, setActive] = useState(0);
  const { currentUser, updateCurrentUser } = useCurrentUser((state) => ({
    currentUser: state.currentUser,
    updateCurrentUser: state.updateCurrentUser
  }));

  console.log(currentUser);

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 2 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const validates =
    active === 0
      ? {
          avatar: (value) => (value ? null : "Please provide your dog's avatar"),
          name: (value) => (value ? null : 'Please provide this field'),
          breed: (value) => (value ? null : 'Please provide this field'),
          bloodLine: (value) => (value ? null : 'Please provide this field'),
          birthDate: (value) => (value ? null : 'Please provide this field')
        }
      : active === 1
      ? {
          age: (value) => (value ? null : 'Please provide this field'),
          gender: (value) => (value ? null : 'Please provide this field'),
          height: (value) => (value ? null : 'Please provide this field'),
          weight: (value) => (value ? null : 'Please provide this field'),
          color: (value) => (value ? null : 'Please provide this field')
        }
      : {
          images: (value) => (value.length > 0 ? null : 'Please add atleast one images.'),
          certificate: (value) => (value ? null : 'Please provide this field'),
          caption: (value) => (value ? null : 'Please provide your avatar')
        };

  const form = useForm({
    initialValues: {
      // owner: currentUser._id,
      avatar: '',
      name: '',
      breed: '',
      bloodLine: '',
      birthDate: '',
      age: '',
      gender: '',
      height: '',
      weight: '',
      color: '',
      images: [],
      certificate: '',
      caption: ''
    },

    validate: { ...validates }
  });

  const createDogMutation = useMutation({
    mutationKey: ['createDog'],
    mutationFn: async (values) => {
      const res = await fetch(`/api/user/${currentUser._id}/dog`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'An error occurred while creating the dog.');
      }

      const { data } = await res.json();
      return data;
    },
    onSuccess: (data) => {
      // Handle successful data update
      updateCurrentUser((state) => {
        return {
          ...state,
          dogs: [...state.dogs, data]
        };
      });

      modal.remove();
    },
    onError: (error) => {
      // Handle error
      console.log(error);
    }
  });

  const handleSubmit = form.onSubmit((values) => {
    createDogMutation.mutate(values);
  });
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
            <FormBasicInformation form={form} />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Physical Characteristics">
            <FormPhysicalCharacteristics form={form} />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Additional Information">
            <FormAdditionalInformation form={form} />
          </Stepper.Step>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          {active !== 2 ? (
            <Button onClick={nextStep} color="orange">
              Next step
            </Button>
          ) : (
            <Button onClick={handleSubmit} color="orange" loading={createDogMutation.isLoading}>
              Submit
            </Button>
          )}
        </Group>
      </div>
    </Modal>
  );
});

export default CreateDogs;
