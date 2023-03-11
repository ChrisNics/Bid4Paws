import dynamic from 'next/dynamic';
import 'sendbird-uikit/dist/index.css';
import { TextInput, Button } from '@mantine/core';
import sendMessage from '../../lib/sendMessage';

const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
  loading: () => <h1>Loadings</h1>
});

const data = {
  name: 'Saturday soccer members',
  channel_url: 'private_chat_room_424',
  cover_url: 'https://sendbird.com/main/img/cover/cover_08.jpg',
  custom_type: 'esports',
  is_distinct: true,
  invited_id: 'Smeb',
  user_ids: ['Smeb', 'The Shy'],
  operator_ids: ['Smeb']
};

const data1 = {
  message_type: 'MESG',
  user_id: 'The Shy',
  message: 'Holycrap'
};

const RegistrationForm = () => {
  return (
    <div className="customized-app">
      <Chat />
      <Button onClick={() => sendMessage({ channelBody: data, messageBody: data1 })}>Submit</Button>
    </div>
  );
};

export default RegistrationForm;
