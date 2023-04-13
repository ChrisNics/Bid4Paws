import { Overlay, Text, ThemeIcon, Tooltip, Skeleton } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

const Card = ({ dog, matchID, showButton = false }) => {
  const queryClient = useQueryClient();

  const handleAcceptMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`/api/match/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'accept' })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'An error occurred while matching.');
      }

      return await res.json();
    },

    onSettled: () => {
      queryClient.invalidateQueries(['my-swipes']);
      queryClient.invalidateQueries(['swipe-you']);
      queryClient.invalidateQueries(['mutual-swipes']);
    }
  });

  const handleDeclineMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`/api/match/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'declined' })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'An error occurred while matching.');
      }

      return await res.json();
    },

    onSettled: () => {
      queryClient.invalidateQueries(['my-swipes']);
      queryClient.invalidateQueries(['swipe-you']);
      queryClient.invalidateQueries(['mutual-swipes']);
    }
  });

  const handleAccept = () => handleAcceptMutation.mutate(matchID);
  const handleDecline = () => handleDeclineMutation.mutate(matchID);

  if (handleAcceptMutation.isLoading || handleDeclineMutation.isLoading)
    return <Skeleton height={150} />;

  return (
    <div className="flex flex-col gap-y-5">
      <div className="h-36 w-30 flex items-end relative hover:outline-orange-500 hover:outline-double hover:outline-3 hover:outline-offset-2 cursor-pointer">
        <Overlay color="#000" opacity={0.2} />
        <Image
          priority
          fill
          sizes="33vw"
          draggable={false}
          alt="image"
          style={{ filter: 'brightness(.80)' }}
          src={dog.avatar}
        />

        <Text p={10} className="z-10" color="white">
          {dog.name}
        </Text>
      </div>
      {showButton && (
        <div className="flex gap-x-5 items-center justify-center">
          <Tooltip label="Accept" color="green">
            <ThemeIcon
              variant="light"
              color="green"
              className="cursor-pointer"
              onClick={handleAccept}>
              <IconCheck />
            </ThemeIcon>
          </Tooltip>

          <Tooltip label="Declined" color="red">
            <ThemeIcon
              variant="light"
              color="red"
              className="cursor-pointer"
              onClick={handleDecline}>
              <IconX />
            </ThemeIcon>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default Card;
