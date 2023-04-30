import { Group, TextInput, Text, ActionIcon, Badge, Radio } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { IconEdit, IconTrash, IconSearch } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { useAllUsers } from '@/hooks/useAllUsers';
import Image from 'next/image';
import NiceModal from '@ebay/nice-modal-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const PAGE_SIZE = 15;

const statusArray = [
  { title: 'Declined', color: '#fa5252' },
  { title: 'Approved', color: '#40c057' },
  { title: 'Pending', color: '#fd7e14' }
];

const UsersTable = () => {
  const { data: allUsers, isFetching: allUsersFetching } = useAllUsers();
  const [records, setRecords] = useState();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortStatus, setSortStatus] = useState({ columnAccessor: 'createdAt', direction: 'asc' });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (allUsersFetching) return;
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    const filteredRecords = allUsers?.filter(({ _id, fullName }) => {
      if (
        debouncedQuery !== '' &&
        !`${_id} ${fullName}`.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
      ) {
        return false;
      }

      //   if (filterStatus !== 'all') {
      //     if (isApproved.status === 'Pending' && filterStatus === 'Pending') return true;
      //     if (isApproved.status === 'Declined' && filterStatus === 'Declined') return true;
      //     if (isApproved.status === 'Approved' && filterStatus === 'Approved') return true;

      //     return false;
      //   }

      return true;
    });
    const paginatedRecords = filteredRecords?.slice(from, to);

    const sortedRecords = sortBy(paginatedRecords, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords);
  }, [page, debouncedQuery, filterStatus, sortStatus, allUsersFetching]);

  const deleteUserMutation = useMutation({
    mutationFn: async (user) => {
      const res = await fetch(`/api/user/${user._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'An error occurred while deleting the user.');
      }

      return await res.json();
    },
    onSettled: ({ data, message }) => {
      // Handle successful data update

      // Refetch query to trigger re-render
      console.log(message);
      console.log('test');
      queryClient.invalidateQueries(['all-users']);
      showNotification({
        title: 'Success',
        message,
        color: 'green'
      });
    },
    onError: (error) => {
      showNotification({
        title: 'Failed',
        message: error.message,
        color: 'red'
      });
    }
  });

  const handleDelete = async (user) => {
    deleteUserMutation.mutate(user);
  };

  return (
    <>
      <div className="w-[200px] lg:w-1/2">
        <TextInput
          mb={20}
          placeholder="Search Users...."
          icon={<IconSearch size={16} />}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </div>

      <DataTable
        withBorder
        withColumnBorders
        records={records}
        fetching={allUsersFetching || deleteUserMutation.isLoading}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        columns={[
          {
            accessor: '_id',
            title: '#',
            sortable: true
          },
          { accessor: 'fullName', title: 'Name', sortable: true },
          { accessor: 'username', title: 'Username', sortable: true },
          { accessor: 'email', title: 'Email', sortable: true },
          { accessor: 'gender', title: 'Gender', sortable: true },
          {
            accessor: 'avatar',
            title: 'Avatar',

            render: (user) => (
              <PhotoProvider>
                <PhotoView src={user.avatar}>
                  <div className="relative h-24 w-24">
                    <Image
                      priority
                      fill
                      src={user.avatar}
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
            render: (user) => (
              <Group spacing={4} position="right" noWrap>
                <ActionIcon
                  color="blue"
                  onClick={() => NiceModal.show('update-user-admin', { user })}>
                  <IconEdit size={16} />
                </ActionIcon>
                <ActionIcon color="red" onClick={handleDelete.bind(this, user)}>
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            )
          }
        ]}
      />
    </>
  );
};

export default UsersTable;
