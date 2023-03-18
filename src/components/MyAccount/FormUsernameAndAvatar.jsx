import SingleImageDropZone from '../SingleImageDropZone';
import Image from 'next/image';
import { TextInput } from '@mantine/core';

const FormUsernameAndAvatar = ({ form }) => {
  return (
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
              // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
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

      <TextInput
        {...form.getInputProps('username')}
        placeholder="Username"
        label="Username"
        withAsterisk
      />
    </div>
  );
};

export default FormUsernameAndAvatar;
