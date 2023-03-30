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
import { TypeAnimation } from 'react-type-animation';

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
    zIndex: 1,
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

        <div className="flex flex-col self-stretch gap-y-5 mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-5">
          <Link href="/matching" passHref legacyBehavior>
            <Button size="xl" color="orange" radius="xl" className={classes.control}>
              Find My Match
            </Button>
          </Link>

          <Link href="/matching" passHref legacyBehavior>
            <Button
              size="xl"
              variant="white"
              color="orange"
              radius="xl"
              className={classes.control}>
              Get Started
            </Button>
          </Link>
        </div>

        <DogFacts />
      </Container>
    </div>
  );
};

export default Hero;
