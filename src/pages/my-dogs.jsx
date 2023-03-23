import Card from '@/components/MyDogs/Card';
import { Button } from '@mantine/core';
import Image from 'next/image';
import NiceModal from '@ebay/nice-modal-react';
import useCurrentUser from '@/store/useCurrentUser';
import Empty from '@/components/MyDogs/Empty';

const MyDogs = () => {
  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));

  const showModal = () => NiceModal.show('create-dog');

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

        {currentUser.dogs?.length > 0 ? (
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

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  };
};

export default MyDogs;
