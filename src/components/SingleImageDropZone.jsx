import { useState } from 'react';
import { Text, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import uploadImage from '../../lib/uploadImage';
import Image from 'next/image';

export default function SingleImageDropZone({ hooks, title }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const previews = selectedFiles.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        alt="image"
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  const handleDrop = async (acceptedFiles) => {
    setIsLoading(true);
    const promises = acceptedFiles.map(async (file) => {
      const { url } = await uploadImage(file);
      hooks(url);
    });
    await Promise.all(promises);
    setSelectedFiles(acceptedFiles);
    setIsLoading(false);
  };
  // https://external.fmnl9-2.fna.fbcdn.net/emg1/v/t13/9317222663367948352?url=https%3A%2F%2Fent-image-api.abs-cbn.com%2FProd%2F2023030506030%2F5e9ed63a17954c2e53b6baed69eb4ec6d50e38f22bbae08d04b9e272680d534f.jpg&fb_obo=1&utld=abs-cbn.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&_nc_eui2=AeHWPhT4O3cVHlmnU8Yq9XySS5rpXGPaFqVLmulcY9oWpSlA9q359_uw9IFhBJ5v8XPeZ9QMidX_Dx_sJvLUdYxt&ccb=13-1&oh=06_AbHwfhGP57GyzvrpLkUwv4WePdq_wyo1A3k2ahTU53mFkg&oe=64070722&_nc_sid=765dde

  return (
    <div>
      <Dropzone
        loading={isLoading}
        accept={IMAGE_MIME_TYPE}
        onDrop={handleDrop}
        className="self-stretch">
        <Text align="center">Drop your {title}</Text>
      </Dropzone>
    </div>
  );
}
