import dayjs from 'dayjs';
import 'dayjs/locale/tl-ph'; // Load the English language package for dayjs

const formatDate = (date) => {
  const formattedDate = dayjs(date).format('YYYY/MM/DD');
  return formattedDate;
};

export default formatDate;
