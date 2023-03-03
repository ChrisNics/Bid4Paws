const InputAlert = ({ status = 'failed', message }) => {
  // mt-2 text-xs text-red-600 dark:text-red-400
  return (
    <p
      id="filled_success_help"
      className={`mt-2 text-xs ${
        status === 'success'
          ? 'text-green-600 dark:text-green-400'
          : 'text-red-600 dark:text-red-400'
      }`}>
      {message}
    </p>
  );
};

export default InputAlert;
