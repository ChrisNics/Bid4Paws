import Card from '@/components/MyDogs/Card';
import { Button } from '@mantine/core';
import Image from 'next/image';
import { modals } from '@mantine/modals';

const data = {
  link: 'https://mantine.dev/',
  views: 7847,
  comments: 5
};

const MyDogs = () => {
  return (
    <section>
      <div className="container mx-auto p-5">
        <div className="mb-10 text-center lg:text-left">
          <div className="flex gap-x-5 max-w-max items-center">
            <h3 className="font-mono text-md">Your Dogs</h3>
            <div className="w-20 h-20 relative rounded-full overflow-hidden ">
              <Image
                priority
                fill
                alt="image"
                src="/dogAvatar.png"
                // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 xl:grid-cols-3">
          <Card
            image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1600"
            title="Browny"
            author="Bulldog"
            {...data}
          />
          <Card
            image="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1600"
            title="Browny"
            author="Bulldog"
            {...data}
          />
          <Card
            image="
            https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1600"
            title="Browny"
            author="Bulldog"
            {...data}
          />
          <Card
            image="
            https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1600"
            title="Browny"
            author="Bulldog"
            {...data}
          />
          <Card
            image="
            https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Browny"
            author="Bulldog"
            {...data}
          />
        </div>
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
