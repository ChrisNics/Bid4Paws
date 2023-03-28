import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';
import DogFacts from '@/components/DogFacts';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      theme.colorScheme === 'light'
        ? 'url(https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*)'
        : 'url(https://rare-gallery.com/mocahbig/33220-Dog-Puppy-Baby-AnimalGolden-Retriever-HD-Wallpaper.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`
    }
  },

  title: {
    color: theme.colorScheme === 'light' ? theme.white : '#C1C2C5',
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
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    }
  }
}));

const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Unleash the Power of Perfect Pairing</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Connect Your Canine Companion with the Perfect Match - The Ultimate Dog Breeding App!
        </Text>

        <Link href="/matching" passHref legacyBehavior>
          <Button size="xl" color="orange" radius="xl" className={classes.control}>
            Find My Match
          </Button>
        </Link>

        <DogFacts />
      </Container>
    </div>
  );
};

export default Hero;
