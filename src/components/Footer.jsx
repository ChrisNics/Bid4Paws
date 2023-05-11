import { createStyles, Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center'
    }
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
      rowGap: '15px',
      marginBlock: '25px'
    }
  },

  wrapper: {
    width: rem(160)
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline'
    }
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column'
    }
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs
    }
  }
}));

const data = [
  {
    title: 'About',
    links: [
      {
        label: 'Home',
        link: '/'
      },
      {
        label: 'Pricing',
        link: '/pricing'
      }
    ]
  },
  {
    links: [
      {
        label: 'Terms and Conditions',
        link: 'https://www.dochub.com/jsfiller-desk15/?requestHash=6d839814f853a8dacec8eb9cac5d8d6931e73c5f076afcccccd7bbdd979eef13&projectId=1271599398&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true#d546534888954fa08f23a072a8980fd6'
      },
      {
        label: 'FAQ',
        link: '/faq'
      }
    ]
  },
  {
    title: 'Community',
    links: [
      {
        label: 'Follow on Instagram',
        link: 'https://www.instagram.com/bid4paws/?igshid=ZGUzMzM3NWJiOQ%3D%3D&fbclid=IwAR3YAa-d37mVP0eg-iuIQxOqqFzDKT6pVNaL3OfiHeJL39Ohq3R5VPEvT28'
      },
      {
        label: 'Follow on Twitter',
        link: 'https://twitter.com/i/flow/lite/verify_password'
      },
      {
        label: 'Follow on Facebook',
        link: 'https://www.facebook.com/bid4paws?mibextid=ZbWKwL'
      }
    ]
  }
];

export default function Footer() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link passHref legacyBehavior href={link.link} key={index}>
        <Text className={classes.link} component="a" target="_blank">
          {link.label}
        </Text>
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <div className="flex cursor-pointer items-center justify-center">
            <Link href="/" passHref legacyBehavior>
              <Image
                src={theme.colorScheme === 'light' ? '/logo-light-2.svg' : '/logo-light.svg'}
                alt="Logo"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>
          <Text size="xs" color="dimmed" className={classes.description}>
            Connect Your Canine Companion with the Perfect Match - The Ultimate Dog Breeding App!
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()} bid4paws. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
