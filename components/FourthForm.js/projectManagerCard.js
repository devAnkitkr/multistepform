import React from 'react';

export default function ProjectManagerCard({
  svg,
  heading,
  caption,
  formData,
  setFormData,
}) {
  return (
    <div
      className="w-full  flex col justify-between items-center text-gray-500 my-2 cursor-pointer group"
      onClick={() =>
        setFormData((prev) => ({ ...prev, projectManager: heading }))
      }
    >
      <div
        className={`w-full min-h-[9=0px] flex justify-between items-center p-3 rounded-lg border group-hover:border-blue-500 ${
          formData.projectManager == heading
            ? 'border-blue-500'
            : 'border-gray-300'
        }`}
      >
        <div
          className={`w-[15%] flex justify-center scale-125 group-hover:fill-gray-500 ${
            formData.projectManager == heading
              ? 'fill-gray-500'
              : 'fill-gray-300'
          }`}
        >
          {svg}
        </div>
        <div className="w-[85%] flex flex-col justify-center items-start">
          <h2 className="text-gray-800 font-semibold">{heading}</h2>
          <p className="leading-tight">{caption}</p>
        </div>
      </div>
    </div>
  );
}
