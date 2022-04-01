import React, { useState } from 'react';
import tailwindStyle from '../../utils/tailwindStyles';
import ErrorMsg from '../ErrorMsg';

export default function ThirdForm({ formData, setFormData, page, setPage }) {
  const { selectedView } = formData;
  const [errorMsg, setErrorMsg] = useState(null);

  const handleThirdFormSubmit = (e) => {
    e.preventDefault();
    if (selectedView == '') {
      return setErrorMsg('Please select one view');
    }
    return setPage(page + 1);
  };
  return (
    <form
      className="w-full min-h-[500px] p-2 pt-2 sm:p-4 sm:pt-2 md:p-8 md:pt-2"
      onSubmit={handleThirdFormSubmit}
    >
      <div className="flex flex-col  justify-center items-center  text-gray-500 ">
        <span className="text-sm text-gray-400 mb-2">
          You can also customize this views in settings
        </span>
        <div className="flex flex-row justify-between w-full mt-6 mb-20 pb-20">
          {/* =====================================LIST============================================ */}
          <div
            className="w-full flex flex-col justify-center items-center cursor-pointer group"
            id="List"
            onClick={() =>
              setFormData((prev) => ({ ...prev, selectedView: 'List' }))
            }
          >
            <div
              className={`flex justify-center items-center border-2 w-[90%] h-[180px]  m-2 rounded-lg group-hover:border-blue-500 ${
                selectedView == 'List' ? 'border-blue-500' : 'border-gray-300'
              }`}
            >
              <div
                className={`flex flex-col justify-start pt-2 items-center w-[50%] h-[50%] border-2 rounded-lg group-hover:border-gray-500 ${
                  selectedView == 'List' ? 'border-gray-500' : 'border-gray-300'
                }`}
              >
                {/* ========================List item ONE======================================= */}
                <div className="flex justify-between items-center w-[80%] h-[20px] mb-2">
                  <div
                    className={`w-[50%] h-5  border-2 border-gray-400 rounded group-hover:border-gray-500  ${
                      selectedView == 'List'
                        ? 'border-gray-500'
                        : 'border-gray-400'
                    }`}
                  ></div>
                  <div className="w-full flex flex-col h-2 pl-2 justify-between items-stretch">
                    <div
                      className={`w-[80%] h-[2px] group-hover:bg-gray-500 ${
                        selectedView == 'List' ? 'bg-gray-500' : 'bg-gray-400'
                      }`}
                    ></div>
                    <div
                      className={`w-[50%] h-[2px]  group-hover:bg-gray-500 ${
                        selectedView == 'List' ? 'bg-gray-500' : 'bg-gray-400'
                      }`}
                    ></div>
                  </div>
                </div>
                {/* ===================================List item TWO==================================== */}
                <div className="flex justify-between items-center w-[80%] h-[20px] ">
                  <div
                    className={`w-[50%] h-5 border-2 border-gray-400 rounded group-hover:border-gray-500  ${
                      selectedView == 'List'
                        ? 'border-gray-500'
                        : 'border-  gray-400'
                    } `}
                  ></div>
                  <div className="w-full flex flex-col h-2 pl-2 justify-between items-stretch">
                    <div
                      className={`w-[80%] h-[2px]  group-hover:bg-gray-500 ${
                        selectedView == 'List' ? 'bg-gray-500' : 'bg-gray-400'
                      }`}
                    ></div>
                    <div
                      className={`w-[50%] h-[2px]  group-hover:bg-gray-500 ${
                        selectedView == 'List' ? 'bg-gray-500' : 'bg-gray-400'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className={`group-hover:text-gray-600 group-hover:font-semibold ${
                selectedView == 'List'
                  ? 'font-semibold text-gray-600'
                  : 'font-normal'
              } `}
            >
              List
            </span>
          </div>

          {/* ===========================================BOARD====================================== */}
          <div
            className="w-full flex flex-col justify-center items-center cursor-pointer group"
            id="Board"
            onClick={() =>
              setFormData((prev) => ({ ...prev, selectedView: 'Board' }))
            }
          >
            <div
              className={`flex justify-center items-center border-2 w-[90%] h-[180px]  m-2 rounded-lg group-hover:border-blue-500 ${
                selectedView == 'Board' ? 'border-blue-500' : 'border-gray-300'
              }`}
            >
              <div className="flex flex-col justify-start pt-2 items-center w-[50%] h-[50%]">
                <div className="w-full grid grid-cols-3 gap-y-2">
                  <div
                    className={` h-3 ${tailwindStyle.innerBoard}  ${
                      selectedView == 'Board'
                        ? 'border-gray-500'
                        : 'border-gray-300'
                    }`}
                  ></div>
                  <div
                    className={` h-3 ${tailwindStyle.innerBoard} ${
                      selectedView == 'Board'
                        ? 'border-gray-500'
                        : 'border-gray-300'
                    }`}
                  ></div>
                  <div
                    className={` h-3 ${tailwindStyle.innerBoard} ${
                      selectedView == 'Board'
                        ? 'border-gray-500'
                        : 'border-gray-300'
                    }`}
                  ></div>
                  <div
                    className={` h-5 ${tailwindStyle.innerBoard} ${
                      selectedView == 'Board'
                        ? 'border-gray-500'
                        : 'border-gray-300'
                    }`}
                  ></div>
                  <div
                    className={` h-15 ${tailwindStyle.innerBoard} ${
                      selectedView == 'Board'
                        ? 'border-gray-500'
                        : 'border-gray-300'
                    }`}
                  ></div>
                  <div
                    className={` h-10 ${tailwindStyle.innerBoard} ${
                      selectedView == 'Board'
                        ? 'border-gray-500'
                        : 'border-gray-300'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            <span
              className={`group-hover:text-gray-600 group-hover:font-semibold ${
                selectedView == 'Board'
                  ? 'font-semibold text-gray-600'
                  : 'text-gray-400'
              }`}
            >
              Board
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10 mb-0 items-center relative">
        <button
          onClick={(e) => {
            e.preventDefault();
            return setPage(page - 1);
          }}
          className={tailwindStyle.backBtn}
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
