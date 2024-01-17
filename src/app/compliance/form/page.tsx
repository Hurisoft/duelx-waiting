"use client";

import React, { useState } from "react";
import FormStep from "@/components/FormStep";
import { Transition } from "@headlessui/react";

function ComplianceFormPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 min-h-screen w-screen bg-black z-[90]">
      <div className="mx-auto flex max-w-screen-2xl">
        <aside className="flex flex-col">
          <FormStep number={1} title="User Name" currentStep={currentStep} />
          <FormStep
            number={2}
            title="Email Address"
            currentStep={currentStep}
          />
        </aside>

        <div className="mx-auto mt-20 w-full max-w-prose">
          <form onSubmit={handleSubmit}>
            {/*Step 1*/}
            <Transition
              show={currentStep === 1}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-20 opacity-0 sm:translate-y-0"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <h3 className="text-3xl font-semibold">Set your user name</h3>

              <p className="mt-4 text-neutral-400">
                Usernames must be unique and not already in use.
              </p>

              <div className="mt-12">
                <label htmlFor="username">
                  User Name <span className="text-red-500">*</span>
                </label>
                <input
                  required={true}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="bg-[#303030] rounded-full px-6 py-6 outline-0 placeholder:text-gray w-full mt-2"
                />
                <button
                  type="button"
                  className="mt-12 flex w-full items-center justify-center gap-6 rounded-full py-5 transition gradient-bg hover:opacity-80"
                  onClick={() => setCurrentStep((step) => ++step)}
                >
                  Next
                  <div className="size-9 rounded-full bg-gradient-to-br from-[#A03A89] via-[#EF2B3D] to-[#FB7A46] grid place-content-center">
                    <img src="/icons/arrow-right.svg" alt="" />
                  </div>
                </button>
              </div>
            </Transition>

            {/*Step 2*/}
            <Transition
              show={currentStep === 2}
              enter="transform ease-out duration-300 transition delay-300"
              enterFrom="translate-y-20 opacity-0 sm:translate-y-0"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <h3 className="text-3xl font-semibold">
                Provide us with your email address
              </h3>

              <p className="mt-4 text-neutral-400"></p>

              <div className="mt-12">
                <label htmlFor="username">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  required={true}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="bg-[#303030] rounded-full px-6 py-6 outline-0 placeholder:text-gray w-full mt-2"
                />
                <button
                  type="submit"
                  className="mt-12 flex w-full items-center justify-center gap-6 rounded-full py-5 transition gradient-bg hover:opacity-80"
                >
                  Submit
                  <div className="size-9 rounded-full bg-gradient-to-br from-[#A03A89] via-[#EF2B3D] to-[#FB7A46] grid place-content-center">
                    <img src="/icons/arrow-right.svg" alt="" />
                  </div>
                </button>
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ComplianceFormPage;
