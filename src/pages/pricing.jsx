import { Title } from '@mantine/core';
import Card from '@/components/Pricing/Card';

const Pricing = () => {
  return (
    <section id="pricing" className="h-full">
      <div className="container mx-auto p-5">
        <Title order={1} align="center" mb={50}>
          Pricing
        </Title>
        <div className="flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:items-stretch sm:gap-x-5 sm:gap-y-0">
          <Card plan="Free" features={['10 daily', 'Maximum of 1 Dog']} />
          <Card plan="Pro" features={['100 swipes daily', 'Maximum of 2 Dogs']} price={499} />
          <Card
            plan="Premium"
            features={['TRULY Unlimited Swipes', 'Maximum of 4 Dogs ', 'Advance Filterization']}
            price={999}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
