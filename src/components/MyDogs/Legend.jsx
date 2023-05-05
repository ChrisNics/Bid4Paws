import { Text } from '@mantine/core';

const Legend = () => {
  return (
    <div className="my-5 flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 sm:gap-y-0">
      <div className="flex items-center gap-x-3">
        <Text color="red">Declined</Text>
        <div className="h-4 w-4 rounded-full bg-red-600"></div>
      </div>
      <div className="flex items-center gap-x-3">
        <Text color="orange">Pending</Text>
        <div className="h-4 w-4 rounded-full bg-orange-400"></div>
      </div>
      <div className="flex items-center gap-x-3">
        <Text color="green">Approved</Text>
        <div className="h-4 w-4 rounded-full bg-green-600"></div>
      </div>
    </div>
  );
};

export default Legend;
