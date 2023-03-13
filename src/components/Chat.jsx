import SendbirdApp from '@sendbird/uikit-react/App';
import useCurrentUser from '@/store/useCurrentUser';

const Chat = () => {
  const currentUser = useCurrentUser((state) => state.currentUser);
  const THEME = 'light' || 'dark';

  return (
    <div style={{ height: 'calc(100vh - 40px)', width: '100vw' }}>
      <SendbirdApp
        // accessToken="c5abce8f752c44399119adbb4c6830efea1db698"
        appId={process.env.NEXT_PUBLIC_SENDBIRD_APP_ID}
        userId="Smeb"
        nickname={currentUser.fullName}
        theme="dark"
        useReaction={true}
        useMessageGrouping={true}
        showSearchIcon={true}
      />
    </div>
  );
};

export default Chat;
