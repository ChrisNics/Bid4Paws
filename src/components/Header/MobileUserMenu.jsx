import { Paper, Accordion, useMantineTheme, rem, Transition, Text } from '@mantine/core';
import { IconLogout, IconMessage, IconDog, IconSettings } from '@tabler/icons-react';
import Link from 'next/link';
import signOut from '../../../lib/signOut';
import useCurrentUser from '@/store/useCurrentUser';
import _ from 'lodash';

const MobileUserMenu = ({ items, opened }) => {
  const currentUser = useCurrentUser((state) => state.currentUser);
  const theme = useMantineTheme();
  const settings = [
    {
      link: '/chat',
      label: 'Messages',
      icon: <IconMessage size={rem(16)} color={theme.colors.yellow[6]} stroke={1.5} />
    },
    {
      link: '/my-dogs',
      label: 'My dogs',
      icon: <IconDog size={rem(16)} stroke={1.5} />
    },
    {
      link: '/my-account',
      label: 'Account Settings',
      icon: <IconSettings size={rem(16)} stroke={1.5} />
    }
  ];

  return (
    <Transition transition="pop-top-right" duration={200} mounted={opened}>
      {(styles) => (
        <Paper
          className={`absolute left-0 right-0 top-28 z-0 overflow-hidden rounded-t-none border-t-0 md:hidden`}
          withBorder
          style={styles}>
          {items}

          {!_.isEmpty(currentUser) && (
            <Accordion
              variant="contained"
              mt={40}
              styles={{
                panel: {
                  cursor: 'pointer',

                  '&:hover': {
                    background:
                      theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[2]
                  }
                }
              }}>
              <Accordion.Item value="settings">
                <Accordion.Control>
                  <Text size="sm">Settings</Text>
                </Accordion.Control>

                {settings.map((setting, i) => (
                  <Link href={setting.link} passHref legacyBehavior key={i}>
                    <Accordion.Panel>
                      <div className="ml-5 flex gap-x-3">
                        {setting.icon}
                        <Text size="sm">{setting.label}</Text>
                      </div>
                    </Accordion.Panel>
                  </Link>
                ))}
                <Accordion.Panel onClick={() => signOut()}>
                  <div className="ml-5 flex gap-x-3">
                    <IconLogout size={rem(16)} stroke={1.5} />
                    <Text size="sm">Logout</Text>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          )}
        </Paper>
      )}
    </Transition>
  );
};

export default MobileUserMenu;
