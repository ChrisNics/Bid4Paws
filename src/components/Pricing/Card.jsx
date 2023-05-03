import { Title, Text, Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import NiceModal from '@ebay/nice-modal-react';
import useCurrentUser from '@/store/useCurrentUser';
import { useRouter } from 'next/router';
import _ from 'lodash';

const Card = ({ plan, features, price = 0 }) => {
  const currentUser = useCurrentUser((state) => state.currentUser);
  const router = useRouter();
  const handleSubscribe = () => {
    if (_.isEmpty(currentUser)) {
      router.push('/signin');
      return;
    }
    NiceModal.show('payment-method', {
      price,
      plan
    });
  };

  console.log(currentUser);

  return (
    <div className="relative flex w-64 flex-col justify-center gap-y-5 rounded-md border-solid border-orange-400 bg-white p-5 text-center dark:bg-black">
      <Title order={5}>{plan}</Title>

      <div>
        <Title order={1}>
          {price}/
          <Text span size="xs">
            month
          </Text>
        </Title>
        <div className="mx-auto mt-5 h-[.2rem] w-[6rem] bg-orange-400"></div>
      </div>

      <div className="flex flex-col items-center gap-y-3">
        {features.map((feature, index) => (
          <div className="flex gap-x-3" key={index}>
            <IconCheck color="orange" />
            <Text>{feature}</Text>
          </div>
        ))}
      </div>

      <div className="flex grow-[2] items-end">
        <Button
          color="orange"
          radius="lg"
          onClick={handleSubscribe}
          fullWidth
          disabled={
            price === 0 || currentUser?.plan?.type === 'Premium' || plan === currentUser?.plan?.type
          }>
          Subscribe
        </Button>
      </div>

      {currentUser?.plan?.type === plan && (
        <div
          className="absolute right-[-22px] top-[-29px] rounded-full bg-orange-400 p-2 text-white"
          style={{ transform: 'rotate(19deg)' }}>
          Current Plan
        </div>
      )}
    </div>
  );
};

export default Card;
