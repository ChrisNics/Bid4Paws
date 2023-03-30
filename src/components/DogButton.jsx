import { UnstyledButton, Group, Avatar, Text, createStyles, Badge } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
    }
  }
}));

export default function DogButton({ image, name, breed, current = false, ...others }) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <div className="flex items-center gap-x-5">
        <Group>
          <Avatar src={image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {breed || 'Labrador'}
            </Text>
          </div>
        </Group>

        {current && (
          <div className="w-1/2">
            <Badge color="orange">Current</Badge>
          </div>
        )}
      </div>
    </UnstyledButton>
  );
}
