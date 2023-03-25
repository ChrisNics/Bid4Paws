import { Loader } from '@mantine/core';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center">
      <Loader color="orange" variant="bars" />;
    </div>
  );
};

export default LoadingScreen;
