import Card from '@/components/MyDogs/Card';
import { Button } from '@mantine/core';
import Image from 'next/image';
import NiceModal from '@ebay/nice-modal-react';
import Empty from '@/components/MyDogs/Empty';
import { useQueryClient, QueryClient, dehydrate } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';
import { authOptions } from './api/auth/[...nextauth]';
import { getCurrentUser } from '@/hooks/useCurrentUser';
import { getServerSession } from 'next-auth';
import LoadingScreen from '@/components/LoadingScreen';

const MyDogs = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const { data: currentUser, isLoading, error } = useCurrentUser(session?.id);

  console.log(currentUser, isLoading, error);

  const showModal = () => NiceModal.show('create-dog');

  if (isLoading) return <LoadingScreen />;

  return (
    <section>
      <div className="container mx-auto p-5">
        <div className="mb-10 text-center lg:text-left">
          <div className="flex gap-x-5 max-w-max items-center">
            <h3 className="font-mono text-md">Your Dogs</h3>
            <div className="w-20 h-20 relative rounded-full overflow-hidden ">
              <Image priority fill alt="image" src="/dogAvatar.png" />
            </div>
          </div>
        </div>

        {currentUser?.dogs?.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 xl:grid-cols-3">
            {currentUser.dogs?.map(({ avatar, name, breed, age }) => (
              <Card avatar={avatar} name={name} breed={breed} age={age} />
            ))}
          </div>
        ) : (
          <Empty showModal={showModal} />
        )}
      </div>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['currentUser', session?.id], () => getCurrentUser(session?.id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
export default MyDogs;
