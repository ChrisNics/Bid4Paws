import { Overlay, Text } from '@mantine/core';
import Image from 'next/image';

const Card = () => {
  return (
    <div className="h-36 w-30 flex items-end relative hover:outline-orange-500 hover:outline-double hover:outline-3 hover:outline-offset-2 cursor-pointer">
      <Overlay color="#000" opacity={0.2} />
      <Image
        priority
        fill
        sizes="33vw"
        draggable={false}
        alt="image"
        style={{ filter: 'brightness(.80)' }}
        src="https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Text p={10} className="z-10" color="white">
        Doggy
      </Text>
    </div>
  );
};

export default Card;
