import { IconEdit, IconTrash } from '@tabler/icons-react';
import {
  Card as MantineCard,
  Text,
  Group,
  createStyles,
  getStylesRef,
  rem,
  Button
} from '@mantine/core';
import useDogsStore from '@/store/useDogsStore';
import NiceModal from '@ebay/nice-modal-react';

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

const Card = ({ dog }) => {
  const { classes } = useStyles();
  const { setDogToUpdate } = useDogsStore((state) => ({ setDogToUpdate: state.setDogToUpdate }));
  const handleDelete = () => NiceModal.show('prompt', { dog });

  const handleEdit = () => {
    setDogToUpdate(dog);
    NiceModal.show('update-dog');
  };

  return (
    <MantineCard
      maw={400}
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      target="_blank">
      <div className={classes.image} style={{ backgroundImage: `url(${dog.avatar})` }} />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/90"></div>

      <div className="h-full relative flex flex-col justify-end z-1 group">
        <div className="flex justify-center items-center h-full w-full">
          <div className="opacity-0 group-hover:opacity-100 flex flex-col  gap-y-5 transition-opacity duration-300 w-full">
            <Button
              leftIcon={<IconEdit size="1rem" />}
              variant="white"
              fullWidth
              h={50}
              onClick={handleEdit}>
              Edit
            </Button>
            <Button
              h={50}
              fullWidth
              leftIcon={<IconTrash size="1rem" />}
              color="red"
              // loading={deleteDogMutation.isLoading}
              onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {dog.name}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {dog.breed}
            </Text>

            <Text size="sm" className={classes.author}>
              {dog.age} years old
            </Text>
          </Group>
        </div>
      </div>
    </MantineCard>
  );
};

export default Card;
