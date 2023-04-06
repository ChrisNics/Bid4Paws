import { TextInput, NumberInput, Tooltip, Skeleton } from '@mantine/core';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const MapboxComponent = dynamic(() => import('@/components/mapBoxComponent'), {
  loading: () => <Skeleton height={400} animate={true} />
});

const FormAddress = ({ form, tab }) => {
  const [lng, setLng] = useState(121.0529);
  const [lat, setLat] = useState(14.7483);
  const [zoom, setZoom] = useState(9);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-5 md:flex md:flex-row md:gap-y-0 md:gap-x-5">
        <TextInput
          {...form.getInputProps('address.city')}
          placeholder="City"
          label="City"
          withAsterisk
          className="grow"
        />
        <TextInput
          {...form.getInputProps('address.province')}
          placeholder="Province"
          label="Province"
          withAsterisk
          className="grow"
        />
      </div>

      <div className="flex flex-col gap-y-5 md:flex md:flex-row md:gap-y-0 md:gap-x-5">
        <TextInput
          {...form.getInputProps('address.street')}
          placeholder="Street Address"
          label="Street Address"
          withAsterisk
          className="grow"
        />
        <TextInput
          {...form.getInputProps('address.barangay')}
          placeholder="Barangay"
          label="Barangay"
          withAsterisk
          className="grow"
        />
        <NumberInput
          maxLength={4}
          {...form.getInputProps('address.postalCode')}
          placeholder="Postal Code"
          label="Postal Code"
          withAsterisk
          className="grow"
          hideControls
          parser={(value) => {
            const parsedValue = value.replace(/\D/g, '');
            return parsedValue;
          }}
        />
      </div>
      {tab === 'Address' && (
        <MapboxComponent
          lng={lng}
          lat={lat}
          radius={form.values.address.geocoding.radius}
          zoom={zoom}
          setLng={setLng}
          setLat={setLat}
          setZoom={setZoom}
          onAddressChange={{
            landmark: (value) => form.setFieldValue('address.geocoding.landmark', value),
            coordinates: (value) => form.setFieldValue('address.geocoding.coordinates', value)
          }}
        />
      )}

      <Tooltip
        width="auto"
        label="Location information is necessary for our app's matchmaking feature to work properly."
        position="top-start">
        <p className="text-xs w-max text-orange-500 cursor-pointer">Why we need this?</p>
      </Tooltip>

      <div className="flex flex-col  gap-y-5">
        <TextInput
          {...form.getInputProps('address.geocoding.landmark')}
          placeholder="Nearest Landmark"
          label="Nearest Landmark"
          withAsterisk
          className="grow"
          disabled
        />

        <NumberInput
          maxLength={4}
          {...form.getInputProps('address.geocoding.radius')}
          placeholder="Radius"
          label="Radius"
          withAsterisk
          className="grow"
          hideControls
          parser={(value) => {
            const parsedValue = value.replace(/\D/g, '');
            return parsedValue;
          }}
        />
      </div>
    </div>
  );
};

export default FormAddress;
