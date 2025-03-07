import { useState } from "react";

const Toggle = () => {
  const [toggled, setToggle] = useState(false);

  return (
    <button
      onClick={() => setToggle(!toggled)}
      className={`w-10 h-5 rounded-2xl flex items-center transition-colors duration-200 ${
        toggled ? "bg-blue-500" : "bg-gray-600"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full bg-white absolute transition-all duration-200 ${
          toggled ? "translate-x-6.5" : "translate-x-0.5"
        }`}
      ></div>
    </button>
  );
};

export default Toggle;
