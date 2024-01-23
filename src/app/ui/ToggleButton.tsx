import { useState } from "react";

const ToggleButton = ({ active, onToggle }: any) => {
  const [isActive, setIsActive] = useState(active);

  const toggleButton = () => {
    onToggle(!isActive);
    setIsActive(!isActive);
  };

  return (
    <button
      className={`bg-gray-300 w-12 h-6 rounded-full  transition-colors duration-300 ${
        isActive ? "bg-blue-500" : "bg-gray-500"
      }`}
      onClick={toggleButton}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          isActive ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
};
export default ToggleButton;
