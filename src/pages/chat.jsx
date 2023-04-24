import dynamic from 'next/dynamic';
import 'sendbird-uikit/dist/index.css';
const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
  loading: () => <h1>Loadings</h1>
});

const RegistrationForm = () => {
  return (
    <div className="customized-app">
      <Chat />
    </div>
  );
};

export default RegistrationForm;
