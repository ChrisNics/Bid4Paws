import { Modal } from 'antd';
import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import { Stepper, useMantineTheme, Group, Button } from '@mantine/core';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import FormBasicInformation from './Forms/FormBasicInformation';
import FormPhysicalCharacteristics from './Forms/FormPhysicalCharacteristics';
import FormAdditionalInformation from './Forms/FormAdditionalInformation';
import { useForm } from '@mantine/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import useCurrentUser from '@/store/useCurrentUser';
import showNotification from '../../../../lib/showNotification';
import useDogsStore from '@/store/useDogsStore';

const UpdateDog = NiceModal.create(() => {
  const modal = useModal();
  const matches = useMediaQuery(`(min-width: ${useMantineTheme().breakpoints.sm})`);
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const [active, setActive] = useState(0);
  const currentUser = useCurrentUser((state) => state.currentUser);
  const { dogToUpdate } = useDogsStore((state) => ({ dogToUpdate: state.dogToUpdate }));

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
      owner: currentUser._id,
      avatar: dogToUpdate.avatar,
      name: dogToUpdate.name,
      breed: dogToUpdate.breed,
      bloodLine: dogToUpdate.bloodLine,
      birthDate: dogToUpdate.birthDate,
      age: dogToUpdate.age,
      gender: dogToUpdate.gender,
      height: dogToUpdate.height,
      weight: dogToUpdate.weight,
      color: dogToUpdate.color,
      images: dogToUpdate.images,
      certificate: dogToUpdate.certificate,
      caption: dogToUpdate.caption
    },

    validate: { ...validates }
  });

  const updateDogMutation = useMutation({
    mutationKey: ['currentUser', session?.id],
    mutationFn: async (values) => {
      const res = await fetch(`/api/user/${currentUser._id}/dog/${dogToUpdate._id}`, {
        method: 'PATCH',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'An error occurred while updating the dog.');
      }

      return await res.json();
    },
    onSettled: ({ data, message }) => {
      // Handle successful data update

      // Refetch query to trigger re-render
      queryClient.invalidateQueries(['currentUser', session?.id]);
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

  const handleSubmit = form.onSubmit((values) => {
    updateDogMutation.mutate(values);
  });

  return (
    <Modal {...antdModal(modal)} footer={null} width={1000}>
      <div className="container mx-auto p-5">
        <div className="mb-10">
          <h3 className="font-mono text-md">Update your dog</h3>
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
          <Button onClick={handleSubmit} color="orange" loading={updateDogMutation.isLoading}>
            Update
          </Button>
        </Group>
      </div>
    </Modal>
  );
});

export default UpdateDog;
