import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Title } from '@mantine/core';
import Box from '@/components/Admin/Box';
import { useAllUsers } from '@/hooks/useAllUsers';
import { useAllDogs } from '@/hooks/useAllDogs';
import { useAllMatches } from '@/hooks/useAllMatches';

const StatsChart = () => {
  const { data: allDogs } = useAllDogs();
  const { data: allUsers } = useAllUsers();
  const { data: allMatches } = useAllMatches();

  const data = [
    {
      name: 'Dogs',
      count: allDogs?.length || 0
    },
    {
      name: 'Users',
      count: allUsers?.length || 0
    },
    {
      name: 'Matches',
      count: allMatches?.length || 0
    }
  ];

  const genderData = allDogs?.reduce((acc, dog) => {
    const gender = dog.gender;
    if (gender in acc) {
      acc[gender]++;
    } else {
      acc[gender] = 1;
    }
    return acc;
  }, {});

  const genderChartData = Object.keys(genderData || {}).map((gender) => ({
    name: gender,
    count: genderData[gender]
  }));

  const breedData = allDogs?.reduce((acc, dog) => {
    const breed = dog.breed;
    if (breed in acc) {
      acc[breed]++;
    } else {
      acc[breed] = 1;
    }
    return acc;
  }, {});

  const breedChartData = Object.keys(breedData || {}).map((breed) => ({
    name: breed,
    count: breedData[breed]
  }));

  // Calculate the number of approved dogs
  const numApprovedDogs =
    allDogs?.filter((dog) => dog.isApproved.status === 'Approved').length || 0;

  const approvedDogsData = [
    {
      name: 'Approved Dogs',
      count: numApprovedDogs
    },
    {
      name: 'Unapproved Dogs',
      count: allDogs?.length - numApprovedDogs || 0
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div>
        <Title order={3} mb={15}>
          Count by Category
        </Title>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
      <div>
        <Title order={3} mb={15}>
          Gender Distribution of Dogs
        </Title>
        <BarChart width={500} height={300} data={genderChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <Title order={3} mb={15}>
          Breed Distribution of Dogs
        </Title>
        <BarChart width={500} height={300} data={breedChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#ffc658" />
        </BarChart>
      </div>
      <div>
        <Title order={3} mb={15}>
          Approved Dogs
        </Title>
        <BarChart width={500} height={300} data={approvedDogsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

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
      <StatsChart />
    </section>
  );
};

export default Index;
