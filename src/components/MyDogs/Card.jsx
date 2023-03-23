import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import {
  Card as MantineCard,
  Text,
  Group,
  Center,
  createStyles,
  getStylesRef,
  rem
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: rem(280),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)'
    }
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease'
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)'
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1
  },

  title: {
    color: theme.white,
    marginBottom: rem(5)
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7)
  },

  author: {
    color: theme.colors.dark[2]
  }
}));

export default function Card({ avatar, name, breed, age }) {
  const { classes, theme } = useStyles();

  return (
    <MantineCard
      maw={400}
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      target="_blank">
      <div className={classes.image} style={{ backgroundImage: `url(${avatar})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {name}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {breed}
            </Text>

            <Text size="sm" className={classes.author}>
              {age} years old
            </Text>
          </Group>
        </div>
      </div>
    </MantineCard>
  );
}
