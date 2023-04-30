import { Group, TextInput, Text, ActionIcon, Badge, Radio } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { IconEdit, IconTrash, IconSearch } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { useAllDogs } from '@/hooks/useAllDogs';
import Image from 'next/image';
import NiceModal from '@ebay/nice-modal-react';

const PAGE_SIZE = 15;

const statusArray = [
  { title: 'Declined', color: '#fa5252' },
  { title: 'Approved', color: '#40c057' },
  { title: 'Pending', color: '#fd7e14' }
];

const DogsTable = () => {
  const { data: allDogs, isFetching: allDogsFetching } = useAllDogs();
  const [records, setRecords] = useState();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortStatus, setSortStatus] = useState({ columnAccessor: 'createdAt', direction: 'asc' });

  useEffect(() => {
    if (allDogsFetching) return;
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    const filteredRecords = allDogs?.filter(({ _id, name, isApproved }) => {
      if (
        debouncedQuery !== '' &&
        !`${_id} ${name}`.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
      ) {
        return false;
      }

      if (filterStatus !== 'all') {
        if (isApproved.status === 'Pending' && filterStatus === 'Pending') return true;
        if (isApproved.status === 'Declined' && filterStatus === 'Declined') return true;
        if (isApproved.status === 'Approved' && filterStatus === 'Approved') return true;

        return false;
      }

      return true;
    });
    const paginatedRecords = filteredRecords.slice(from, to);

    const sortedRecords = sortBy(paginatedRecords, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords);
  }, [page, debouncedQuery, filterStatus, sortStatus, allDogsFetching]);

  const handleDelete = async (id) => {
    const { data, message, status } = await removeVendor(id);
    if (status === 'success') {
      showNotification({
        title: 'Success',
        color: 'green',
        disallowClose: true,
        message
      });
    } else {
      showNotification({
        title: 'ERROR',
        color: 'red',
        disallowClose: true,
        message
      });
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-end lg:gap-x-5">
        <div className="w-[200px] lg:w-1/2">
          <TextInput
            mb={20}
            placeholder="Search Dogs...."
            icon={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </div>
        <div className="lg:w-1/2">
          <Radio.Group
            className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-2 sm:gap-y-0"
            value={filterStatus}
            onChange={setFilterStatus}
            mb={20}>
            <Radio value="all" label="All" color="blue" />
            {statusArray.map(({ title, color }, i) => (
              <Radio
                key={i}
                value={title}
                label={title}
                styles={{
                  radio: {
                    '&:checked': {
                      background: color,
                      borderColor: color
                    }
                  }
                }}
              />
            ))}
          </Radio.Group>
        </div>
      </div>

      <DataTable
        withBorder
        withColumnBorders
        records={records}
        fetching={allDogsFetching}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        columns={[
          {
            accessor: '_id',
            title: '#',
            sortable: true
          },
          {
            accessor: 'isApproved.status',
            title: 'Status',
            textAlignment: 'center',
            sortable: true,
            render: (dog) =>
              dog.isApproved.status === 'Pending' ? (
                <Badge color="orange">PENDING</Badge>
              ) : dog.isApproved.status === 'Approved' ? (
                <Badge color="green">APPROVED</Badge>
              ) : (
                <Badge color="red">DECLINED</Badge>
              )
          },
          { accessor: 'name', title: 'Name', sortable: true },
          { accessor: 'breed', title: 'Breed', sortable: true },
          { accessor: 'bloodLine', title: 'Blood Line', sortable: true },
          {
            accessor: 'certificate',
            title: 'Certificate',

            render: (dog) => (
              <PhotoProvider>
                <PhotoView src={dog.certificate}>
                  <div className="relative h-24 w-24">
                    <Image
                      priority
                      fill
                      src={dog.certificate}
                      alt="Random unsplash image"
                      // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
                    />
                  </div>
                </PhotoView>
              </PhotoProvider>
            )
          },
          {
            accessor: 'actions',
            title: <Text mr="xs">Row actions</Text>,
            textAlignment: 'right',
            render: (dog) => (
              <Group spacing={4} position="right" noWrap>
                <ActionIcon
                  color="blue"
                  onClick={() => NiceModal.show('update-dog-admin', { dog })}>
                  <IconEdit size={16} />
                </ActionIcon>
                {/* <ActionIcon color="red" onClick={handleDelete.bind(this, vendor._id)}>
                  <IconTrash size={16} />
                </ActionIcon> */}
              </Group>
            )
          }
        ]}
      />
    </>
  );
};

export default DogsTable;
