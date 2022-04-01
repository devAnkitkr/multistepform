import { useState } from 'react';
import FirstForm from '../components/FirstForm/FirstForm';
import SecondForm from '../components/SecondForm/SecondForm';
import ThirdForm from '../components/ThirdForm/ThirdForm';
import FourthForm from '../components/FourthForm.js/FourthForm';
import Layout from '../components/Layout';

export const initialFormData = {
  projectName: '',
  client: '',
  startFrom: '',
  endTo: '',
  note: '',
  projectType: '',
  projectRateSelected: '', // project hourly rate
  projectRateAmount: '',
  budget: '',
  budgetReset: false,
  sendEmail: false,
  emailBudgetLimit: '',
  selectedView: '',
  projectManager: '',
};

export default function Home() {
  const [page, setPage] = useState(0);
  const [toggleMultiStepForm, setToggleMultiStepForm] = useState(false);
  const [btnText, setBtnText] = useState('Next');
  const formTitles = [
    'Create a project',
    'Project type',
    'Select a view',
    'Who can manage projects',
  ];
  const [formData, setFormData] = useState(initialFormData);
  const [clientList, setClientList] = useState(['Client 1', 'Client 2']);

  // ========================TOGGLING FORM VIA "page" VALUE===============================
  const pageToDisplay = () => {
    if (page == 0) {
      return (
        <FirstForm
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          setToggleMultiStepForm={setToggleMultiStepForm}
          clientList={clientList}
          setClientList={setClientList}
        />
      );
    } else if (page == 1) {
      return (
        <SecondForm
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page == 2) {
      return (
        <ThirdForm
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else {
      return (
        <FourthForm
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          setBtnText={setBtnText}
          setToggleMultiStepForm={setToggleMultiStepForm}
        />
      );
    }
  };

  console.log('formData:', formData);
  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <button
          className="p-2 px-4 rounded bg-blue-500 text-white"
          onClick={() => setToggleMultiStepForm(true)}
        >
          Create Project
        </button>
        {toggleMultiStepForm == true && (
          <div className="absolute bg-white w-full max-w-[550px] mx-auto justify-center items-center border border-gray-100 rounded drop-shadow-2xl  drop-shadow-[0_5px_50px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col p-4 justify-center items-center">
              {/* ========================Form close button top right========================================= */}
              <span
                className="absolute top-3 right-3 cursor-pointer fill-gray-500 scale-115"
                onClick={() => {
                  setPage(0);
                  return setToggleMultiStepForm(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
              </span>
              <h1 className="text-2xl font-semibold mt-6 mb-2">
                {formTitles[page]}
              </h1>

              {pageToDisplay()}

              <div className="flex my-4">
                {formTitles.map((_, index) => {
                  return (
                    <div
                      className={`h-1 bg-gray-300 rounded-full mx-1 transition-all ease-in duration-150 ${
                        index == page ? 'w-6 bg-gray-500' : 'w-2'
                      } `}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
