import { useQuery } from '@tanstack/react-query';

export const getDogFacts = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '50bd2ada35msh730b866dd090289p14a36fjsn7edf966f924e',
      'X-RapidAPI-Host': 'dog-facts2.p.rapidapi.com'
    }
  };
  const res = await fetch('https://dog-facts2.p.rapidapi.com/facts', options);
  return await res.json();
};

export const useDogFacts = () =>
  useQuery({
    queryKey: ['dogFacts'],
    queryFn: getDogFacts
    // refetchInterval: 8000
  });
