import { Overlay, Text, ThemeIcon, Tooltip, Skeleton } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import sendMessage from '../../../../lib/sendMessage';
import useCurrentUser from '@/store/useCurrentUser';
import { useMemo } from 'react';

const Card = ({ dog, matchID, showButton = false }) => {
  const queryClient = useQueryClient();
  const currentUser = useCurrentUser((state) => state.currentUser);

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
    name: `${currentDog?.name} && ${dog?.name}`,
    channel_url: `${currentDog?._id}_${dog?._id}_private_room`,
    is_distinct: true,
    cover_url: 'https://sendbird.com/main/img/cover/cover_08.jpg',
    custom_type: 'breeding',
    invited_id: dog?.id,
    user_ids: [currentDog._id, dog?._id],
    operator_ids: [currentDog._id]
  };

  const data1 = {
    message_type: 'MESG',
    user_id: currentDog._id,
    message: 'Holycrap Amazing'
  };

  console.log(currentUser._id, dog.owner);

  return (
    <div className="flex flex-col gap-y-5 group">
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

      {currentDog && (
        <div className="invisible group-hover:visible text-center text-white  bg-orange-500 rounded-md cursor-pointer hover:bg-white hover:text-orange-500 hover:border-solid  hover:border-orange-500 transition duration-75">
          <h6
            className="font-sans uppercase p-2"
            onClick={() => sendMessage({ channelBody: data, messageBody: data1 })}>
            Chat now
          </h6>
        </div>
      )}

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
