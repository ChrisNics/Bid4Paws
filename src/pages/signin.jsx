import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  Blockquote
} from '@mantine/core';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useForm } from '@mantine/form';
import showNotification from '../../lib/showNotification';
import DogFacts from '@/components/DogFacts';
import signOut from '../../lib/signOut';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundImage:
      theme.colorScheme === 'light'
        ? 'url(https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        : "url('https://images.pexels.com/photos/1074882/pexels-photo-1074882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    position: 'relative',
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%'
    }
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  }
}));

export default function AuthenticationImage() {
  const { classes } = useStyles();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const currentUser = queryClient.getQueryData(['currentUser', session?.id]);
  console.log(currentUser);

  const form = useForm({
    initialValues: {
      username: '',
      password: ''
    },

    validate: {
      username: (value) => (value ? null : 'Please provide this field'),
      password: (value) => (value ? null : 'Please provide this field')
    }
  });

  const handleSubmit = form.onSubmit(async (values) => {
    if (currentUser) {
      signOut(session);
      return;
    }
    const res = await signIn('credentials', { redirect: false, ...values }); // We dont need it to convert it to json, next-auth already handles it.
    if (!res.ok) {
      showNotification({ title: 'Invalid Credentials', message: res.error, color: 'red' });
      return;
    }
  });

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <div className="inline-block absolute top-5 right-5">
          <ThemeToggle />
        </div>

        <div className="flex justify-center items-center my-10">
          <Image src="/logo-2.gif" alt="Logo" width={200} height={200} />
        </div>

        <TextInput
          label="Username"
          placeholder="Your Username"
          size="md"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          {...form.getInputProps('password')}
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" color="orange" onClick={handleSubmit}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Link href="/signup" legacyBehavior>
            <Anchor color="orange" weight={700}>
              Register
            </Anchor>
          </Link>
        </Text>

        <DogFacts />
      </Paper>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  return {
    props: {} // will be passed to the page component as props
  };
};
