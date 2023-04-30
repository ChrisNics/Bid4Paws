import { Title } from '@mantine/core';

const Box = ({ title, count }) => {
  return (
    <div className="flex flex-col gap-y-2 bg-white p-5 shadow-sm dark:bg-[#25262b] sm:w-1/3 2xl:w-[400px]">
      <Title order={3}>{title}</Title>
      <Title order={6} color="dimmed">
        Count
      </Title>
      <Title order={3}>{count}</Title>
    </div>
  );
};

export default Box;
