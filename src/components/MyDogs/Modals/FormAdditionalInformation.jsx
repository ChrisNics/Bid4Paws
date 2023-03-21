import Image from 'next/image';
import SingleImageDropZone from '@/components/SingleImageDropZone';
import { TextInput } from '@mantine/core';
import MultiImageDropZone from '@/components/MultiImageDropZone';

const FormAdditionalInformation = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-center">
          <MultiImageDropZone title="image" />
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-sm flex flex-col gap-y-5">
            <div className="relative border rounded-full h-60 w-60 overflow-hidden">
              <Image
                priority
                fill
                alt="image"
                // src={
                //   form.values.avatar
                //     ? form.values.avatar
                //     : 'https://uploads.commoninja.com/searchengine/wordpress/random-avatars-of-user.png'
                // }
                src="https://uploads.commoninja.com/searchengine/wordpress/random-avatars-of-user.png"
                // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
              />
            </div>
            <SingleImageDropZone
              title="Certificate"
              // hooks={(value) => form.setFieldValue('avatar', value)}
            />
            {/* {form.errors.avatar && (
              <div>
                <p className="text-sm text-red-500">{form.errors.avatar}</p>
              </div>
            )} */}
          </div>
        </div>
        <TextInput placeholder="Caption" label="Caption" withAsterisk />
      </div>
    </div>
  );
};

export default FormAdditionalInformation;
