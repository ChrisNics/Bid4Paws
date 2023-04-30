import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import { PinInput, Group, Title, LoadingOverlay } from '@mantine/core';
import { Modal } from 'antd';
import showNotification from '../../lib/showNotification';
import { useEffect, useState } from 'react';

const VerificationModal = NiceModal.create(({ values }) => {
  const modal = useModal();
  const [pin, setPin] = useState();
  const [pinError, setPinError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ ...values, verificationCode: pin }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      const errorData = await res.json();
      setPinError(true);
      setTimeout(() => {
        setPinError(false);
      }, 1000); // add a 1 second delay before turning off the pinError state
      return;
    }

    const data = await res.json();
    modal.remove();
    showNotification({
      title: 'Success',
      message: 'Hooray! You have successfully created an account.',
      color: 'green'
    });
  };

  const handleResend = async () => {
    setIsLoading(true);
    const res = await fetch('/api/auth/send-verification-code?resend', {
      method: 'POST',
      body: JSON.stringify({ email: values.email }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      const errorData = await res.json();
      showNotification({ title: 'Invalid Credentials', message: errorData.message, color: 'red' });
      setIsLoading(false);
      return;
    }

    const data = await res.json();
    showNotification({
      title: 'Success',
      message: 'Please check your email for verification code.',
      color: 'green'
    });
    setIsLoading(false);
  };

  useEffect(() => {
    const handleEnterPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener('keydown', handleEnterPress);
    return () => {
      document.removeEventListener('keydown', handleEnterPress);
    };
  }, [values, pin]);

  console.log(pin);
  return (
    <Modal {...antdModal(modal)} footer={null}>
      <div className="flex flex-col items-center gap-y-3">
        <LoadingOverlay visible={isLoading} overlayBlur={2} />
        <Title order={3}>Verification Code</Title>
        <Title order={6}>
          Enter this verification code on your device. Please check your email.
        </Title>
        <PinInput value={pin} onChange={setPin} error={pinError} />
        <Title
          order={6}
          className="cursor-pointer uppercase hover:text-orange-400"
          color="dimmed"
          onClick={handleResend}>
          Resend Code
        </Title>
      </div>
    </Modal>
  );
});

export default VerificationModal;
