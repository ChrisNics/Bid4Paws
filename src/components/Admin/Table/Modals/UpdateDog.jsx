import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import { TextInput, Select, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Modal } from 'antd';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import showNotification from '../../../../../lib/showNotification';
import { useQueryClient } from '@tanstack/react-query';

const UpdateDogAdmin = NiceModal.create(({ dog }) => {
  const modal = useModal();
  const queryClient = useQueryClient();

  console.log(dog);

  const form = useForm({
    initialValues: {
      isApproved: {
        status: dog.isApproved.status,
        comment: dog.isApproved.comment
      }
    },

    validate: {
      isApproved: {
        status: (value) => (value ? null : 'Please provide this field'),
        comment: (value, values) => {
          if (values.isApproved.status === 'Declined' && !value) {
            return 'Please provide a reason for declining the dog';
          }
          return null;
        }
      }
    }
  });

  const updateDogMutation = useMutation({
    mutationFn: async (values) => {
      const res = await fetch(`/api/user/${dog.owner}/dog/${dog._id}`, {
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
      queryClient.invalidateQueries(['all-dogs']);
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
    updateDogMutation.mutate(values);
  });

  console.log(form.errors);

  return (
    <Modal {...antdModal(modal)} footer={null}>
      <div className="p-5">
        <Select
          {...form.getInputProps('isApproved.status')}
          label="Approve this Dog?"
          placeholder="Pick One"
          mb={10}
          data={[
            { value: 'Approved', label: 'Approved' },
            { value: 'Declined', label: 'Declined' },
            { value: 'Pending', label: 'Pending' }
          ]}
        />

        {form.values.isApproved.status === 'Approved' ||
        form.values.isApproved.status === 'Pending' ? null : (
          <TextInput
            {...form.getInputProps('isApproved.comment')}
            placeholder="Reason"
            label="Reason"
            withAsterisk
          />
        )}

        <Group position="center" mt="xl">
          <Button onClick={handleUpdate} color="orange" loading={updateDogMutation.isLoading}>
            Update
          </Button>
        </Group>
      </div>
    </Modal>
  );
});

export default UpdateDogAdmin;
