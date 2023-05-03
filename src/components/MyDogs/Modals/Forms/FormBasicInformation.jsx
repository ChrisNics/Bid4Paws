import Image from 'next/image';
import SingleImageDropZone from '@/components/SingleImageDropZone';
import { TextInput, Select, Group, Avatar, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import breeds from '../../../../../dev-data/breeds';
import { forwardRef } from 'react';

const SelectItem = forwardRef(({ img, label, origin, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Avatar src={img} />

      <div>
        <Text size="sm">{label}</Text>
        <Text size="xs" opacity={0.65}>
          {origin}
        </Text>
      </div>
    </Group>
  </div>
));

export default function FormBasicInformation({ form }) {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-center">
          <div className="flex max-w-sm flex-col gap-y-5">
            <div className="relative h-60 w-60 overflow-hidden rounded-full border">
              <Image
                priority
                quality={50}
                sizes="33vw"
                fill
                alt="image"
                src={
                  form.values.avatar ||
                  'https://uploads.commoninja.com/searchengine/wordpress/random-avatars-of-user.png'
                }
              />
            </div>
            <SingleImageDropZone
              title="avatar"
              hooks={(value) => form.setFieldValue('avatar', value)}
            />
            {form.errors.avatar && (
              <div>
                <p className="text-sm text-red-500">{form.errors.avatar}</p>
              </div>
            )}
          </div>
        </div>
        <TextInput placeholder="Name" label="Name" withAsterisk {...form.getInputProps('name')} />

        <Select
          {...form.getInputProps('breed')}
          itemComponent={SelectItem}
          label="Breed"
          placeholder="Pick one"
          searchable
          nothingFound="No options"
          maxDropdownHeight={280}
          data={breeds}
        />

        <TextInput
          placeholder="Bloodline"
          label="Bloodline"
          withAsterisk
          {...form.getInputProps('bloodLine')}
        />
        <div>
          <p className="text-sm">Birth Date</p>
          <DatePicker
            {...form.getInputProps('birthDate')}
            value={form.values.birthDate}
            allowDeselect
          />
          {form.errors.birthDate && (
            <div>
              <p className="text-sm text-red-500">{form.errors.birthDate}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
