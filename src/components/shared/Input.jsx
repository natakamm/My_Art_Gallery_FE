import useIsSmallScreen from "../../hooks/useIsSmallScreen";
const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  required = false,
  errorMessage = "",
  children,
}) => {
  const isSmallScreen = useIsSmallScreen();
  const inputId = `${name}-input`;

  return (
    <div className="relative w-full">
      {label && (
        <label htmlFor={inputId} className="pl-2 text-xs text-white">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full px-3 py-2 pr-10 bg-gray-600/30 hover:bg-gray-600/40 active:bg-gray-600/40 focus:outline-none focus:ring focus:ring-violet-200 text-white text-base rounded-xl"
        required={required}
        aria-required={required}
        aria-describedby={errorMessage ? `${inputId}-error` : undefined}
      />
      {children && (
        <div
          aria-hidden="true"
          className="absolute right-3 top-[35px] flex items-center cursor-pointer"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Input;
