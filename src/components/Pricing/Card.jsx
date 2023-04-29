import { Title, Text, Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import NiceModal from '@ebay/nice-modal-react';

const Card = ({ plan, features, price = 0 }) => {
  const handleSubscribe = () =>
    NiceModal.show('payment-method', {
      price,
      plan
    });

  return (
    <div className="w-64 bg-white dark:bg-black flex flex-col justify-center text-center p-5 gap-y-5 border-solid border-orange-400 rounded-md">
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

      <Button color="orange" radius="lg" onClick={handleSubscribe} disabled={price === 0}>
        Subscribe
      </Button>
    </div>
  );
};

export default Card;
