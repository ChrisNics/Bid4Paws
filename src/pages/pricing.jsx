import { Title } from '@mantine/core';
import Card from '@/components/Pricing/Card';

const Pricing = () => {
  return (
    <section id="pricing" className="h-full">
      <div className="container mx-auto p-5">
        <Title order={1} align="center" mb={50}>
          Pricing
        </Title>
        <div className="flex flex-col gap-y-5 justify-center items-center sm:gap-y-0 sm:flex-row sm:gap-x-5 sm:items-stretch">
          <Card plan="Free" features={['10 swipes per day', 'Basic features']} />
          <Card
            plan="Pro"
            features={['Unlimited swipes', 'More profile features like badges, stickers, etc.']}
            price={499}
          />
          <Card
            plan="Premium"
            features={['TRULY unlimited swipes', 'Advance Filterization']}
            price={999}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
