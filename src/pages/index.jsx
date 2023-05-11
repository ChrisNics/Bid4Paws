import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  rem,
  useMantineTheme
} from '@mantine/core';
import DogFacts from '@/components/DogFacts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TypeAnimation } from 'react-type-animation';

import { Modal } from 'antd';
import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    height: 'maxContent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: `calc(${theme.spacing.xl} * 3)`
    }
  },

  title: {
    color: 'inherit',
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3
    }
  },

  description: {
    color: theme.colorScheme === 'light' ? theme.white : '#C1C2C5',
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm
    }
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    }
  }
}));

export const GetStarted = NiceModal.create(() => {
  const modal = useModal();
  const router = useRouter();

  return (
    <Modal {...antdModal(modal)} footer={null} width={1000}>
      <Title order={3} color="orange">
        Creating Dogs and Navigating our App: A Step-by-Step Tutorial
      </Title>
      <Text>
        Welcome to our app! Learn how to create your own dogs and navigate through the app with ease
        in this step-by-step tutorial.
      </Text>
      <div className="py-5">
        <video src="/tutorial.mp4" controls width="100%" />
      </div>
      <div className="flex justify-end">
        <div className="flex gap-x-3">
          <Button
            color="orange"
            onClick={() => {
              NiceModal.hide('get-started');
              router.push('/matching');
            }}>
            Find Match
          </Button>
          <Button
            variant="outline"
            color="orange"
            onClick={() => {
              NiceModal.hide('get-started');
              router.push('/my-dogs');
            }}>
            Create Dogs
          </Button>
        </div>
      </div>
    </Modal>
  );
});

const Hero = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
        top={-150}
      />
      <Container className={classes.container}>
        <div className="text-white dark:text-[#C1C2C5] lg:w-[960px]">
          <TypeAnimation
            sequence={['', 1000, 'Unleash the Power of Perfect Pairing', 1000]}
            repeat={Infinity}
            wrapper="p"
            cursor={{ show: true, blink: true, element: '_' }}
            className={classes.title}
          />
        </div>

        <Text className={classes.description} size="xl" mt="xl">
          Connect Your Canine Companion with the Perfect Match - The Ultimate Dog Breeding App!
        </Text>

        <div className="mt-10 flex flex-col gap-y-5 self-stretch sm:flex-row sm:gap-x-5 sm:gap-y-0">
          <Link href="/matching" passHref legacyBehavior>
            <Button size="xl" color="orange" radius="xl" className={classes.control}>
              Find My Match
            </Button>
          </Link>

          <Button
            size="xl"
            variant="white"
            color="orange"
            radius="xl"
            className={classes.control}
            onClick={() => NiceModal.show('get-started')}>
            Get Started
          </Button>
        </div>

        <DogFacts />
      </Container>
    </div>
  );
};

export default Hero;
