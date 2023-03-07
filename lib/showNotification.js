import { notifications } from '@mantine/notifications';

const showNotification = ({ title, message, color }) =>
  notifications.show({
    title,
    message,
    color
  });

export default showNotification;
