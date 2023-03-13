import { useState, useEffect } from 'react';
import { Blockquote, Text } from '@mantine/core';

function DogFacts({ color = 'black' }) {
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

    try {
      const res = await fetch('https://dog-facts2.p.rapidapi.com/facts', options);
      const data = await res.json();
      setFact(data.facts[0]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogFacts();

    // const interval = setInterval(() => {
    //   fetchDogFacts();
    // }, 10000);

    // return () => clearInterval(interval);
  }, []);

  if (error) return null;

  return (
    <>
      {!loading && (
        <Blockquote cite="– Fact about dogs" mt={50}>
          <div>
            <p className={`font-sans text-sm text-${color}`}>{fact}</p>
          </div>
        </Blockquote>
      )}
    </>
  );
}

export default DogFacts;
