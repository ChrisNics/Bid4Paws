import dynamic from 'next/dynamic';
import 'sendbird-uikit/dist/index.css';
import LoadingScreen from '@/components/LoadingScreen';
const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
  loading: () => <LoadingScreen />
});

const RegistrationForm = () => {
  return (
    <div className="customized-app">
      <Chat />
    </div>
  );
};

export default RegistrationForm;
