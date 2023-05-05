import Card from '@/components/MyDogs/Card';
import { Button, Text } from '@mantine/core';
import Image from 'next/image';
import NiceModal from '@ebay/nice-modal-react';
import Empty from '@/components/MyDogs/Empty';
import { useSession } from 'next-auth/react';
import { IconPlus } from '@tabler/icons-react';
import useCurrentUser from '@/store/useCurrentUser';
import Legend from '@/components/MyDogs/Legend';

const MyDogs = () => {
  const { data: session } = useSession();
  const currentUser = useCurrentUser((state) => state.currentUser);

  const showModal = () => NiceModal.show('create-dog');

  return (
    <section className="min-h-screen">
      <div className="container mx-auto p-5">
        <div className="mb-10 flex flex-col items-center gap-y-5 text-center sm:flex-row sm:justify-between lg:text-left">
          <div className="flex max-w-max items-center gap-x-5">
            <h3 className="text-md font-mono">Your Dogs</h3>
            <div className="relative h-20 w-20 overflow-hidden rounded-full ">
              <Image priority fill alt="Dog Image" src="/dogAvatar.png" quality={50} sizes="33vw" />
            </div>
          </div>
          {currentUser?.dogs?.length < 4 && currentUser?.dogs?.length !== 0 && (
            <Button leftIcon={<IconPlus />} color="orange" onClick={showModal}>
              Add dog
            </Button>
          )}
        </div>

        <Legend />

        {currentUser?.dogs?.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 xl:grid-cols-3">
            {currentUser.dogs?.map((dog) => (
              <Card dog={dog} key={dog._id} />
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
  return {
    props: {}
  };
};
export default MyDogs;
