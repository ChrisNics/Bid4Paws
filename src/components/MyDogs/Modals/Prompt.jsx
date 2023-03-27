import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import { Modal } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import showNotification from '../../../../lib/showNotification';
import useCurrentUser from '@/store/useCurrentUser';
import { useSession } from 'next-auth/react';
import { Text } from '@mantine/core';

const Prompt = NiceModal.create(({ dog }) => {
  const modal = useModal();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));

  const deleteDogMutation = useMutation({
    mutationKey: ['currentUser', session?.id],
    mutationFn: async () => {
      const res = await fetch(`/api/user/${currentUser._id}/dog/${dog._id}`, {
        method: 'DELETE',
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
      modal.remove();
      showNotification({
        title: 'Failed',
        message: error.message,
        color: 'red'
      });
    }
  });

  const handleDelete = () => {
    deleteDogMutation.mutate();
  };
  return (
    <Modal
      {...antdModal(modal)}
      onOk={handleDelete}
      okText="Delete"
      onCancel={() => modal.remove()}
      confirmLoading={deleteDogMutation.isLoading}
      okButtonProps={{ type: 'primary', danger: true }}
      cancelText="Cancel">
      <p className="font-sans text-md">
        Update your dog Deleting <b className="text-orange-500">{dog.name}'s</b> profile means
        losing all the evidence of their presence in your life. Before you hit that delete button,
        take a moment to cherish the memories you've created together.
      </p>
    </Modal>
  );
});

export default Prompt;
