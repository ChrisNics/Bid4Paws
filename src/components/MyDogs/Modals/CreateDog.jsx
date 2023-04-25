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

const CreateDogs = NiceModal.create(() => {
  const modal = useModal();
  const matches = useMediaQuery(`(min-width: ${useMantineTheme().breakpoints.sm})`);
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const [active, setActive] = useState(0);
  const currentUser = useCurrentUser((state) => state.currentUser);

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
      owner: currentUser._id,
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
      caption: '',
      address: currentUser.address
    },

    validate: { ...validates }
  });

  const createDogMutation = useMutation({
    mutationKey: ['currentUser', session?.id],
    mutationFn: async (values) => {
      const createDogReq = fetch(`/api/user/${currentUser._id}/dog`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const createDogRes = await createDogReq;

      if (!createDogRes.ok) {
        const errorData = await createDogRes.json();
        throw new Error(errorData.message || 'An error occurred while creating the dog.');
      }

      const { data, message } = await createDogRes.json();

      const createUserReq = fetch(`${process.env.NEXT_PUBLIC_SENDBIRD_URL}/users`, {
        method: 'POST',
        body: JSON.stringify({
          user_id: data._id,
          nickname: data.name,
          profile_url: data.avatar,
          profile_file: 'png',
          issue_access_token: true
        }),
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': process.env.NEXT_PUBLIC_SENDBIRD_TOKEN
        }
      });

      const createUserRes = await createUserReq;

      if (!createUserRes.ok) {
        const errorData = await createUserRes.json();
        throw new Error(errorData.message || 'An error occurred while creating the user.');
      }

      const userData = await createUserRes.json();

      return { data, message };
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
