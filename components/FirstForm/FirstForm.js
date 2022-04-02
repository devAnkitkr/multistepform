import React, { useState } from 'react';
import tailwindStyle from '../../utils/tailwindStyles';
import ErrorMsg from '../ErrorMsg';
import AddMoreClients from './AddMoreClients';
import classes from './FirstForm.module.scss';

export default function FirstForm({
  formData,
  setFormData,
  page,
  setPage,
  setToggleMultiStepForm,
  clientList,
  setClientList,
}) {
  const [isNewClientRequested, setisNewClientRequested] = useState(false);
  const [newClientEntry, setNewClientEntry] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleNewClientRequest = (e) => {
    e.preventDefault();
    setisNewClientRequested(!isNewClientRequested);
  };

  const handleAddClient = (e) => {
    e.preventDefault();
    if (newClientEntry.length <= 4) {
      setErrorMsg('Client name must be longer than 4 letters');
      return;
    }
    setClientList((prev) => [...prev, newClientEntry]);

    return setisNewClientRequested(false); // closing "ADD NEW CLIENT" request
  };

  const handleOnChange = (e) => {
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFirstFormSubmit = (e) => {
    e.preventDefault();
    const { startFrom, endTo } = formData;
    if (endTo < startFrom == true) {
      return setErrorMsg('Ending date must come after starting date');
    }
    return setPage(page + 1);
  };

  return (
    <form
      className="w-full min-h-[500px] p-2 pt-2 sm:p-4 sm:pt-2 md:p-8 md:pt-2"
      onSubmit={handleFirstFormSubmit}
    >
      {/* ==================================Project Name=============================== */}
      <div className={tailwindStyle.inputBox}>
        <label className={tailwindStyle.customLabel}>Project name</label>
        <input
          type="text"
          className={tailwindStyle.customInput}
          value={formData.projectName}
          name="projectName"
          minLength={3}
          maxLength={40}
          placeholder="Enter project name here"
          onChange={handleOnChange}
          required
        />
      </div>

      {/* ==========================================Client======================================= */}
      <div className={tailwindStyle.inputBox}>
        <label className={tailwindStyle.customLabel}>Client </label>
        <div className="flex justify-between items-center">
          <div className={classes.customSelect}>
            <select name="client" onChange={handleOnChange} required>
              <option value="" disabled selected>
                Select a client
              </option>

              {clientList.map((clientName) => (
                <option
                  value={clientName}
                  selected={formData.client == clientName ? true : false}
                >
                  {clientName}
                </option>
              ))}
            </select>
            <span className="absolute z-0 fill-gray-500 top-4 right-2 scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </span>
          </div>
          <span className="text-gray-400 w-[10%] flex justify-center items-center px-1">
            or
          </span>
          <button
            className={`w-[50%] md:w-[30%] ${tailwindStyle.customBtn}`}
            onClick={(e) => handleNewClientRequest(e)}
          >
            <span className="text-xl font-semibold px-1">+</span> New Client
          </button>
        </div>
      </div>

      {/*======================Request for New client and addition of new client========================= */}
      {isNewClientRequested == true && (
        <AddMoreClients
          setClientList={setClientList}
          handleAddClient={handleAddClient}
          setNewClientEntry={setNewClientEntry}
        />
      )}

      {/* =========================================Dates============================================= */}
      <div className={tailwindStyle.inputBox}>
        <label className={tailwindStyle.customLabel}>Dates</label>
        <div className="flex justify-between items-center">
          <div className="relative w-full flex justify-center items-center">
            <span className="absolute z-0 fill-gray-400  right-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path>
                <path d="m15.628 12.183-1.8-1.799 1.37-1.371 1.8 1.799zm-7.623 4.018V18h1.799l4.976-4.97-1.799-1.799z"></path>
              </svg>
            </span>
            <input
              type="date"
              name="startFrom"
              placeholder="DD-MM-YY"
              className={classes.customDate}
              value={formData.startFrom}
              onChange={handleOnChange}
              required
            />
          </div>
          <span className="m-2 w-3 h-[2px] bg-gray-300"></span>
          <div className="relative w-full flex justify-center items-center">
            <span className="absolute z-0 fill-gray-400 right-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path>
                <path d="m15.628 12.183-1.8-1.799 1.37-1.371 1.8 1.799zm-7.623 4.018V18h1.799l4.976-4.97-1.799-1.799z"></path>
              </svg>
            </span>
            <input
              type="date"
              name="endTo"
              className={classes.customDate}
              value={formData.endTo}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
      </div>

      {/* ================================Note====================================== */}
      <div className={tailwindStyle.inputBox}>
        <label className={tailwindStyle.customLabel}>Note</label>
        <textarea
          type="select"
          name="note"
          className={tailwindStyle.customInput}
          placeholder="Optional"
          rows="4"
          cols="50"
          style={{ resize: 'none' }}
          value={formData.note}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </div>

      {/* ===============================BACK BUTTON AND NEXT BUTTON============================ */}

      <div className="w-full flex justify-center mt-10 mb-0 items-center relative">
        <button
          onClick={(e) => {
            e.preventDefault();
            return setToggleMultiStepForm(false);
          }}
          className="text-sm flex  items-center absolute  left-0 text-gray-500 fill-gray-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
          <span>Back</span>
        </button>
        <input type="submit" value="Next" className={tailwindStyle.nextBtn} />
      </div>

      {errorMsg != null && <ErrorMsg errorMsg={errorMsg} />}
    </form>
  );
}
