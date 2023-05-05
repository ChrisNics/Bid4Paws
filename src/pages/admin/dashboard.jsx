import { Title } from '@mantine/core';
import Box from '@/components/Admin/Box';
import { useAllUsers } from '@/hooks/useAllUsers';
import { useAllDogs } from '@/hooks/useAllDogs';
import { useAllMatches } from '@/hooks/useAllMatches';

const Index = () => {
  const { data: allUsers, isFetching: allUsersFetching } = useAllUsers();
  const { data: allDogs, isFetching: allDogsFetching } = useAllDogs();
  const { data: allMatches, isFetching: allMatchesFetching } = useAllMatches();
  console.log({ allUsers, allDogs });
  return (
    <section id="admin">
      <div className="container mx-auto py-10 sm:px-5">
        <div className="sm: flex flex-col gap-y-5 sm:flex-row sm:justify-center sm:gap-x-5 sm:gap-y-0">
          <Box count={allDogs?.length || 0} title="Dogs" />
          <Box count={allUsers?.length || 0} title="Users" />
          <Box count={allMatches?.length || 0} title="Matches" />
        </div>
      </div>
    </section>
  );
};

export default Index;
