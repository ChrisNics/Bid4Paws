import { useRouter } from 'next/router';
import { Text } from '@mantine/core';
import { useEffect } from 'react';

const Redirect = () => {
  const router = useRouter();
  const { id, planToken, plan } = router.query;

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/planToken?id=${id}&planToken=${planToken}&plan=${plan}`, {
        redirect: 'manual'
      });
      console.log(await response.json());

      if (response.ok) {
        // Redirect to localhost
        router.push('/');
      } else {
        // Redirect to localhost/error
        router.push('/404');
      }
    })();
  }, []);

  return (
    <section id="redirect">
      <div className="min-h-screen flex items-center justify-center">
        <Text>Redirecting...</Text>
      </div>
    </section>
  );
};

export default Redirect;
