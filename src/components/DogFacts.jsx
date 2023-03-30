import { useState, useEffect } from 'react';
import { Blockquote, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

function DogFacts({ color = 'white' }) {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDogFacts = async () => {
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

  const { data, isLoading } = useQuery({
    queryKey: ['dogFacts'],
    queryFn: fetchDogFacts
    // refetchInterval: 8000
  });

  return (
    <>
      <Blockquote cite="– Fact about dogs" mt={50}>
        <div>
          <p className={`font-sans text-sm text-${color} dark:text-[#C1C2C5]`}>
            {data?.facts[0] || 'The are 4 constellations named after dogs.'}
          </p>
        </div>
      </Blockquote>
    </>
  );
}

export default DogFacts;
