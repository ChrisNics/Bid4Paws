import { useState } from 'react';
import { Text, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import uploadImage from '../../lib/uploadImage';
import Image from 'next/image';

export default function SingleImageDropZone({ hooks, title }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
