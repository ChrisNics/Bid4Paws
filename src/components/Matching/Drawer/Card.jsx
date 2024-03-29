import { Overlay, Text, ThemeIcon, Tooltip, Skeleton } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import sendMessage from '../../../../lib/sendMessage';
import useCurrentUser from '@/store/useCurrentUser';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

const Card = ({ dog, matchID, showButton = false, swipeYou = false }) => {
  const queryClient = useQueryClient();
  const currentUser = useCurrentUser((state) => state.currentUser);
  const router = useRouter();

  const currentDog = useMemo(
    () => currentUser?.dogs?.find((dog) => dog.isCurrent === true),
    [currentUser]
  );

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
      queryClient.invalidateQueries(['random-dogs']);
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
      queryClient.invalidateQueries(['random-dogs']);
    }
  });

  const handleAccept = () => handleAcceptMutation.mutate(matchID);
  const handleDecline = () => handleDeclineMutation.mutate(matchID);

  if (handleAcceptMutation.isLoading || handleDeclineMutation.isLoading)
    return <Skeleton height={150} />;

  const data = {
    name: `${currentDog?.name} & ${dog?.name}`,
    channel_url: `${currentDog?._id}_${dog?._id}_private_room`,
    is_distinct: true,
    cover_url: dog?.avatar,
    custom_type: 'breeding',
    invited_id: dog?.id,
    user_ids: [currentDog._id, dog?._id],
    operator_ids: [currentDog._id]
  };

  const data1 = {
    message_type: 'MESG',
    user_id: currentDog._id,
    message: `Hello ${dog.name}`
  };

  console.log(currentUser._id, dog.owner);

  return (
    <div className="group flex flex-col gap-y-5">
      <div className="w-30 hover:outline-3 relative flex h-36 cursor-pointer items-end hover:outline-double hover:outline-offset-2 hover:outline-orange-500">
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
        <div className="invisible cursor-pointer rounded-md bg-orange-500  text-center text-white transition duration-75 hover:border-solid hover:border-orange-500  hover:bg-white hover:text-orange-500 group-hover:visible">
          <h6
            className="p-2 font-sans uppercase"
            onClick={async () => {
              await sendMessage({ channelBody: data, messageBody: data1 });
              window.open('/chat', '_blank');
            }}>
            Chat now
          </h6>
        </div>
      )}

      {swipeYou && (
        <div className="flex items-center justify-center gap-x-5">
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
