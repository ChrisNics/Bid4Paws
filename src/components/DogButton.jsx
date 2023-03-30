import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  createStyles,
  Badge,
  LoadingOverlay,
  Loader
} from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import useCurrentUser from '@/store/useCurrentUser';
import showNotification from '../../lib/showNotification';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
    }
  }
}));

export default function DogButton({ dog }) {
  const { classes } = useStyles();
  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const updateDogMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/user/${currentUser._id}/dog/${dog._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          isCurrent: false
        })
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
    },
    onError: (error) => {
      showNotification({
        title: 'Failed',
        message: error.message,
        color: 'red'
      });
    }
  });

  console.log(updateDogMutation.isLoading, updateDogMutation.data);

  const handleUpdate = () => updateDogMutation.mutate();

  return (
    <UnstyledButton className={classes.user} onClick={handleUpdate}>
      <LoadingOverlay
        visible={updateDogMutation.isLoading}
        overlayBlur={2}
        loader={<Loader color="orange" variant="bars" />}
      />
      <div className="flex items-center gap-x-5">
        <Group>
          <Avatar src={dog.image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {dog.name}
            </Text>

            <Text color="dimmed" size="xs">
              {dog.breed}
            </Text>
          </div>
        </Group>

        {dog.isCurrent && (
          <div className="w-1/2">
            <Badge color="orange">Current</Badge>
          </div>
        )}
      </div>
    </UnstyledButton>
  );
}