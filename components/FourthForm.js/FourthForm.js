import React, { useState } from 'react';
import svgIcons from '../../utils/svgIcons';
import tailwindStyle from '../../utils/tailwindStyles';
import ErrorMsg from '../ErrorMsg';
import ProjectManagerCard from './projectManagerCard';
import Cookies from 'js-cookie';
import { initialFormData } from '../../pages';

export default function FourthForm({
  formData,
  setFormData,
  page,
  setPage,
  setBtnText,
  setToggleMultiStepForm,
}) {
  const [errorMsg, setErrorMsg] = useState(null);

  const handleFourthFormSubmit = (e) => {
    e.preventDefault();
    if (formData.projectManager == '') {
      return setErrorMsg('Please select one option');
    }
    Cookies.set('formData', JSON.stringify(formData));
    setFormData(initialFormData);
    setToggleMultiStepForm(false);
    setPage(0);
    alert('Form has been submitted');
  };
  return (
    <form
      className="w-full min-h-[500px] p-2 pt-2 sm:p-4 sm:pt-2 md:p-8 md:pt-2"
      onSubmit={handleFourthFormSubmit}
    >
      <div className="flex flex-col justify-start items-center min-h-[400px]">
        <span className="text-sm text-gray-400 mb-8">
          Don't panic - You can also customize this permissions in settings
        </span>

        {/* ===================================CHILD ONE======================================== */}
        <ProjectManagerCard
          svg={svgIcons.EveryoneIcon}
          heading="Everyone"
          caption=" All users can now see it, but guests cannot access the projects"
          formData={formData}
          setFormData={setFormData}
        />

        {/* ==================================CHILD TWO======================================== */}
        <ProjectManagerCard
          svg={svgIcons.OnlyAdminIcon}
          heading="Only Admin's"
          caption=" Only admins can manage everything"
          formData={formData}
          setFormData={setFormData}
        />

        {/* =========================================CHILD THREE============================================= */}
        <ProjectManagerCard
          svg={svgIcons.OnlyToSpecificIcon}
          heading="Only to Specific people"
          caption="Only some specific people can able to see it"
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <div className="w-full flex justify-center mt-10 mb-0 items-center relative">
        <button
          onClick={(e) => {
            e.preventDefault();

            setBtnText('Next');
            return setPage(page - 1);
          }}
          className={tailwindStyle.backBtn}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
          <span>Back</span>
        </button>
        <input type="submit" value="Submit" className={tailwindStyle.nextBtn} />
      </div>
      {errorMsg != null && <ErrorMsg errorMsg={errorMsg} />}
    </form>
  );
}
