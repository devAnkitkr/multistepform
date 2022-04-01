import React, { useState } from 'react';
import tailwindStyle from '../../utils/tailwindStyles';
import ErrorMsg from '../ErrorMsg';
import ProjectTypeBtn from './ProjectTypeBtn';
import classes from './SecondForm.module.scss';

export default function SecondForm({ formData, setFormData, page, setPage }) {
  const [errorMsg, setErrorMsg] = useState(null);

  const handleOnChange = (e) => {
    if (e.target.name == 'projectType') {
      e.preventDefault();
      return setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }

    // for BUDGET RESETING EVERY MONTH
    if (e.target.name == 'budgetReset') {
      return setFormData((prev) => ({
        ...prev,
        [e.target.name]: !formData.budgetReset,
      }));
    }
    // for SENDING EMAIL ALERT
    else if (e.target.name == 'sendEmail') {
      return setFormData((prev) => ({
        ...prev,
        [e.target.name]: !formData.sendEmail,
      }));
    }
    // for PROJECT RATE AMOUNT
    else if (e.target.name == 'projectRateAmount') {
      const re = /^[0-9,\b]+$/; //checking whether the entered value is proper number or not by using REGEX.
      if (e.target.value === '' || re.test(e.target.value)) {
        // const formatedNumber = parseInt(e.target.value).toLocaleString();
        return setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
      return (e.target.value = '');
    }
    // for EMAIL BUDGET EXCEED
    else if (e.target.name == 'emailBudgetLimit') {
      const re = /^[0-9]{0,2}$/;
      if (e.target.value == '' || re1.test(e.target.value)) {
        return setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
      return (e.target.value = '');
    }
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSecondFormSubmit = (e) => {
    e.preventDefault();
    if (formData.projectType == '') {
      return setErrorMsg('Project Type is not selected');
    }

    return setPage(page + 1);
  };

  return (
    <form
      className="w-full flex flex-col min-h-[500px] p-2 pt-2 sm:p-4 sm:pt-2 md:p-8 md:pt-2"
      onSubmit={handleSecondFormSubmit}
    >
      <span className="w-full text-center text-sm text-gray-400 mb-2">
        Don't panic - You can also customize this type in setttings
      </span>
      <div className="flex justify-between border rounded-lg text-gray-500 cursor-pointer mt-6 overflow-hidden">
        <ProjectTypeBtn
          handleOnChange={handleOnChange}
          title="Time & Materials"
          isSelected={formData.projectType == 'Time & Materials'}
        />
        <ProjectTypeBtn
          handleOnChange={handleOnChange}
          title="Fixed Fee"
          isSelected={formData.projectType == 'Fixed Fee'}
        />
        <ProjectTypeBtn
          handleOnChange={handleOnChange}
          title="Non-Billable"
          isSelected={formData.projectType == 'Non-Billable'}
        />
      </div>
      <div className={tailwindStyle.inputBox}>
        <label className={tailwindStyle.customLabel}>Hourly </label>
        <span className="text-sm text-gray-400 mb-2">
          We need hourly rates to track your project's billable amount
        </span>
        <div className="flex justify-between items-center">
          {/* =======Project Hourly rate selected=========== */}
          <div className={classes.customSelect}>
            <select
              name="projectRateSelected"
              onChange={handleOnChange}
              required
            >
              <option value="" disabled selected>
                Project Hourly Rate
              </option>
              <option
                value="Project Rate option 1"
                selected={
                  formData.projectRateSelected == 'Project Rate option 1'
                    ? true
                    : false
                }
              >
                option 1
              </option>
              <option
                value="Project Rate option 2"
                selected={
                  formData.projectRateSelected == 'Project Rate option 2'
                    ? true
                    : false
                }
              >
                option 2
              </option>
            </select>
            <span className="absolute z-0 fill-gray-500 top-4 right-2 scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </span>
          </div>

          {/* =======Project Hourly rate Amount=========== */}
          <div className="relative">
            <input
              type="text"
              name="projectRateAmount"
              value={formData.projectRateAmount}
              className={`ml-3 pl-5 ${tailwindStyle.customInput}`}
              onChange={handleOnChange}
              required={formData.projectRateSelected ? true : false}
            />
            <span className="absolute top-3 left-5">₹</span>
          </div>
        </div>
      </div>

      {/* ========================Budget======================== */}
      <div className={tailwindStyle.inputBox}>
        <label className={tailwindStyle.customLabel}>Budget</label>
        <span className="text-sm text-gray-400 mb-2">
          We need hourly rates to track your project's billable amount
        </span>
        <div className={classes.customSelect}>
          <select name="budget" onChange={handleOnChange} required>
            <option value="" disabled selected>
              Hours per person
            </option>
            <option
              value="Budget option 1"
              selected={formData.budget == 'Budget option 1' ? true : false}
            >
              Budget option 1
            </option>
            <option
              value="Budget option 2"
              selected={formData.budget == 'Budget option 2' ? true : false}
            >
              Budget option 2
            </option>
          </select>
          <span className="absolute z-0 fill-gray-500 top-4 right-2 scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </span>
        </div>
      </div>

      <div className={`text-sm ${tailwindStyle.inputBox}`}>
        <div className="py-1">
          <input
            type="checkbox"
            name="budgetReset"
            className="border border-gray-200 mr-2"
            checked={formData.budgetReset}
            onChange={handleOnChange}
          />
          <span>Budge resets every month</span>
        </div>
        <div className="flex flex-row py-1">
          <div className="flex items-center ">
            <input
              type="checkbox"
              className="border border-gray-200 mr-2"
              name="sendEmail"
              checked={formData.sendEmail}
              onChange={handleOnChange}
            />
            <span>Send email alerts if project exceeds</span>
          </div>
          <div className="flex items-center ">
            <input
              type="text"
              name="emailBudgetLimit"
              className="w-[28px] p-1 mx-2 border rounded-lg outline-none focus:border-blue-500"
              onChange={handleOnChange}
              value={formData.emailBudgetLimit}
              required={formData.sendEmail == true ? true : false}
            />
            <span>% of budget</span>
          </div>
        </div>
      </div>

      {/* ===================================BACK AND NEXT BUTTON============================= */}
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
