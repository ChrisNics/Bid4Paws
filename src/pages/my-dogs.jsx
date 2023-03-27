import Card from '@/components/MyDogs/Card';
import { Button } from '@mantine/core';
import Image from 'next/image';
import NiceModal from '@ebay/nice-modal-react';
import Empty from '@/components/MyDogs/Empty';
import { useSession } from 'next-auth/react';
import { IconPlus } from '@tabler/icons-react';
import useCurrentUser from '@/store/useCurrentUser';

const MyDogs = () => {
  const { data: session } = useSession();
  const currentUser = useCurrentUser((state) => state.currentUser);

  const showModal = () => NiceModal.show('create-dog');

  return (
    <section>
      <div className="container mx-auto p-5">
        <div className="flex flex-col gap-y-5 items-center sm:flex-row sm:justify-between mb-10 text-center lg:text-left">
          <div className="flex gap-x-5 max-w-max items-center">
            <h3 className="font-mono text-md">Your Dogs</h3>
            <div className="w-20 h-20 relative rounded-full overflow-hidden ">
              <Image priority fill alt="image" src="/dogAvatar.png" quality={50} sizes="33vw" />
            </div>
          </div>
          {currentUser?.dogs?.length < 4 && currentUser?.dogs?.length !== 0 && (
            <Button leftIcon={<IconPlus />} color="orange" onClick={showModal}>
              Add dog
            </Button>
          )}
        </div>

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
