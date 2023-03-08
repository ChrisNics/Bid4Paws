import { notifications } from '@mantine/notifications';

const showNotification = ({ title, message, color }) =>
  notifications.show({
    title,
    message,
    color,
    autoClose: 1000
  });

export default showNotification;
