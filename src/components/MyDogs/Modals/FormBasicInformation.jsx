import Image from 'next/image';
import SingleImageDropZone from '@/components/SingleImageDropZone';
import { TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const FormBasicInformation = ({ form }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-center items-center">
          <div className="max-w-sm flex flex-col gap-y-5">
            <div className="relative border rounded-full h-60 w-60 overflow-hidden">
              <Image
                priority
                fill
                alt="image"
                src={
                  form.values.avatar
                    ? form.values.avatar
                    : 'https://uploads.commoninja.com/searchengine/wordpress/random-avatars-of-user.png'
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
        <TextInput
          placeholder="Breed"
          label="Breed"
          withAsterisk
          {...form.getInputProps('breed')}
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
};

export default FormBasicInformation;
