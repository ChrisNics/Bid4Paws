import dynamic from 'next/dynamic';
import React from 'react';
import { Text, Overlay, Tabs } from '@mantine/core';
import Image from 'next/image';
import { IconSwipe, IconHeart } from '@tabler/icons-react';
import Card from './Card';

const MantineDrawer = dynamic(() => import('@mantine/core').then((mod) => mod.Drawer));

const test = new Array(20).fill({ name: 'Doggy' });

const Drawer = ({ opened, close }) => {
  console.log('test');
  return (
    <MantineDrawer opened={opened} onClose={close}>
      <Tabs defaultValue="my-swipes" color="orange">
        <Tabs.List grow>
          <Tabs.Tab value="my-swipes" icon={<IconSwipe size="0.8rem" />}>
            My Swipes
          </Tabs.Tab>
          <Tabs.Tab value="my-matches" icon={<IconHeart size="0.8rem" />}>
            My Matches
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="my-swipes" pt="xs">
          <div className="grid grid-cols-3 gap-2 sm:gap-5">
            {test.map(() => (
              <Card />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="my-matches" pt="xs">
          Messages tab content
        </Tabs.Panel>
      </Tabs>
    </MantineDrawer>
  );
};

export default React.memo(Drawer);
