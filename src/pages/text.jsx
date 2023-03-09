import React from 'react';
import 'sendbird-uikit/dist/index.css';
import useCurrentUser from '@/store/useCurrentUser';
import dynamic from 'next/dynamic';
const SendbirdApp = dynamic(() => import('sendbird-uikit').then((mod) => mod.App));
// import "./styles.css";

const APP_ID = 'C0896859-3FF1-4F0E-83E7-068BA265220D';

// // set your own USER_ID and NICKNAME
// const USER_ID = 'Kamote';
// const NICKNAME = 'Awit';
const THEME = 'light' || 'dark';

const RegistrationForm = () => {
  const { currentUser, loading } = useCurrentUser((state) => ({
    currentUser: state.currentUser,
    loading: state.loading
  }));

  return (
    <div className="customized-app">
      {!loading && (
        <SendbirdApp
          accessToken="c5abce8f752c44399119adbb4c6830efea1db698"
          appId={APP_ID}
          userId="Smeb"
          nickname={currentUser.fullName}
          theme={THEME}
          useReaction={true}
          useMessageGrouping={true}
          showSearchIcon={true}
          channelUrl={`sendbird_group_channel_${[currentUser._id, 'The Shy'].sort().join('_')}`}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
