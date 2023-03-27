import Image from 'next/image';
import SingleImageDropZone from '@/components/SingleImageDropZone';
import { TextInput } from '@mantine/core';
import MultiImageDropZone from '@/components/MultiImageDropZone';

const FormAdditionalInformation = ({ form }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <MultiImageDropZone
            title="image"
            images={form.values.images}
            hooks={(value) => form.insertListItem('images', value)}
          />

          {form.errors.images && (
            <div>
              <p className="text-sm text-red-500">{form.errors.images}</p>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center">
          <div className="max-w-sm flex flex-col gap-y-5">
            <div className="relative border rounded-lg h-60 w-60 overflow-hidden">
              <Image
                priority
                fill
                alt="image"
                quality={50}
                sizes="33vw"
                src={
                  form.values.certificate
                    ? form.values.certificate
                    : 'https://uploads.commoninja.com/searchengine/wordpress/random-avatars-of-user.png'
                }
              />
            </div>
            <SingleImageDropZone
              title="Certificate"
              hooks={(value) => form.setFieldValue('certificate', value)}
            />
            {form.errors.certificate && (
              <div>
                <p className="text-sm text-red-500">{form.errors.certificate}</p>
              </div>
            )}
          </div>
        </div>
        <TextInput
          placeholder="Caption"
          label="Caption"
          withAsterisk
          {...form.getInputProps('caption')}
        />
      </div>
    </div>
  );
};

export default FormAdditionalInformation;
