import { Title } from '@mantine/core';
import Box from '@/components/Admin/Box';

const Index = () => {
  return (
    <section id="admin">
      <div className="container mx-auto py-10 sm:px-5">
        <div className="sm: flex flex-col gap-y-5 sm:flex-row sm:justify-center sm:gap-x-5 sm:gap-y-0">
          <Box count={13} title="Dogs" />
          <Box count={16} title="Users" />
          <Box count={24} title="Matches" />
        </div>
      </div>
    </section>
  );
};

export default Index;
