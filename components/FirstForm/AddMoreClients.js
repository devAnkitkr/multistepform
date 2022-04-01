import React, { useState } from 'react';
const style = {
  inputBox: 'flex flex-col w-full mb-3',
  customLabel: 'my-1 font-semibold text-gray-700',
  customInput:
    'my-1 p-2   border border-gray-200 outline-none hover:outline-none rounded-lg focus:border-blue-500',

  customBtn: 'p-2 mx-2 px-8 bg-blue-500 text-white rounded-lg',
};
export default function AddMoreClients({ handleAddClient, setNewClientEntry }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add new client"
        minLength={5}
        className={style.customInput}
        onChange={(e) => setNewClientEntry(e.target.value)}
      />
      <button className={style.customBtn} onClick={handleAddClient}>
        Add
      </button>
    </div>
  );
}
