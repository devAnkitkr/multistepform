import React from 'react';

export default function ProjectTypeBtn({ handleOnChange, title, isSelected }) {
  return (
    <button
      type="text"
      className={`w-full p-2 text-center focus:bg-blue-500 focus:text-white ${
        isSelected ? 'bg-blue-500 text-white' : ''
      }`}
      name="projectType"
      value={title}
      onClick={handleOnChange}
    >
      {title}
    </button>
  );
}
