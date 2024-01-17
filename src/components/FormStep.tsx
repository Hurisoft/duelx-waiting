import React from "react";

function FormStep({
  number,
  title,
  currentStep,
}: {
  number: number;
  title: string;
  currentStep: number;
}) {
  return (
    <>
      <div className="mx-1 w-20">
        <div className="mx-auto h-20 bg-neutral-400 w-0.5"></div>
      </div>
      <div className="flex items-center gap-6 transition">
        <div
          className={`rounded-full p-1 transition ${
            currentStep === number ? "bg-white" : "bg-neutral-400"
          }`}
        >
          <div
            className={`grid place-content-center transition rounded-full size-20 ${
              currentStep === number
                ? "circle-gradient-bg"
                : "bg-neutral-900 bg-opacity-90"
            }`}
          >
            <span className="text-3xl font-semibold">{number}</span>
          </div>
        </div>
        <p className="text-xl font-medium text-neutral-400 max-w-36">{title}</p>
      </div>
    </>
  );
}

export default FormStep;
