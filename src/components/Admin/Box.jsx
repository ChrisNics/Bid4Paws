import { Title } from '@mantine/core';
import dynamic from 'next/dynamic';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

const Box = ({ title, count }) => {
  return (
    <div className="flex flex-col gap-y-2 bg-white p-5 shadow-sm dark:bg-[#25262b] sm:w-1/3 2xl:w-[400px]">
      <Title order={3}>{title}</Title>
      <Title order={6} color="dimmed">
        Count
      </Title>
      <Title order={3}>
        <CountUp end={count} duration={5} />
      </Title>
    </div>
  );
};

export default Box;
