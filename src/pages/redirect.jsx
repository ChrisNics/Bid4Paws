import { useRouter } from 'next/router';
import { Text } from '@mantine/core';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const Redirect = () => {
  const router = useRouter();
  const { id, planToken, plan } = router.query;
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/plan?id=${id}&planToken=${planToken}&plan=${plan}`, {
        redirect: 'manual'
      });

      if (response.ok) {
        // Redirect to localhost
        queryClient.invalidateQueries('currentUser', session?._id);
        router.push('/');
      } else {
        // Redirect to localhost/error
        router.push('/404');
      }
    })();
  }, []);

  return (
    <section id="redirect">
      <div className="flex min-h-screen items-center justify-center">
        <Text>Redirecting...</Text>
      </div>
    </section>
  );
};

export default Redirect;
