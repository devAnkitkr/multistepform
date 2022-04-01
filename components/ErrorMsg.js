import React from 'react';

export default function ErrorMsg({ errorMsg }) {
  return (
    <div className="mx-auto text-center text-red-500 text-sm mt-6">
      {errorMsg}
    </div>
  );
}
