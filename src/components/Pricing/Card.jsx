import { Title, Text, Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import NiceModal from '@ebay/nice-modal-react';
import useCurrentUser from '@/store/useCurrentUser';

const Card = ({ plan, features, price = 0 }) => {
  const handleSubscribe = () =>
    NiceModal.show('payment-method', {
      price,
      plan
    });

  const currentUser = useCurrentUser((state) => state.currentUser);
  console.log(currentUser);

  return (
    <div className="relative w-64 bg-white dark:bg-black flex flex-col justify-center text-center p-5 gap-y-5 border-solid border-orange-400 rounded-md">
      <Title order={5}>{plan}</Title>

      <div>
        <Title order={1}>
          {price}/
          <Text span size="xs">
            month
          </Text>
        </Title>
        <div className="h-[.2rem] w-[6rem] mx-auto bg-orange-400 mt-5"></div>
      </div>

      <div className="flex flex-col gap-y-3 items-center">
        {features.map((feature, index) => (
          <div className="flex gap-x-3" key={index}>
            <IconCheck color="orange" />
            <Text>{feature}</Text>
          </div>
        ))}
      </div>

      <Button
        color="orange"
        radius="lg"
        onClick={handleSubscribe}
        disabled={
          price === 0 || currentUser.plan.type === 'Premium' || plan === currentUser.plan.type
        }>
        Subscribe
      </Button>

      {currentUser.plan.type === plan && (
        <div
          className="bg-orange-400 p-2 rounded-full absolute top-[-29px] right-[-22px] text-white"
          style={{ transform: 'rotate(19deg)' }}>
          Current Plan
        </div>
      )}
    </div>
  );
};

export default Card;
