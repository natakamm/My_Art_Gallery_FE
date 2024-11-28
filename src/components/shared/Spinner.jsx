const Spinner = () => {
  return (
    <span
      role="status"
      aria-live="polite"
      className="loading loading-spinner loading-sm text-white"
    >
      <span className="sr-only">Loading...</span>
    </span>
  );
};

export default Spinner;
