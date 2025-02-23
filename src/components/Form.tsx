import {useState, useEffect } from 'react'
import { Result } from './Result';

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const disableForm = isLoading || showResult;

  return (
    <div className="mb-12">
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-xl md:text-3xl ">
          What did you do last week?
        </h2>
        <a
          target="_blank"
          href="https://x.com/doge"
          className="bg-slate-100 py-1.5 px-3 text-gray-950 rounded-lg text-center font-semibold items-center flex hover:bg-red-800 hover:text-white"
        >
          Submit on
          <svg width="12.5" height="12.78125" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="black"></path></svg></a>
      </div>
      <label htmlFor="email" className="text-sm">
        Government email
      </label>
      <input
        type="email" id="email" name="email" className="w-full border-gray-400 border-2 rounded-lg p-3 mb-3 disabled:text-red-800"
        placeholder="government email"
        disabled={disableForm}
      />

      <label htmlFor="what-i-did-last-week" className="text-sm">
        What did you do last week? (max 5 bullet points)
      </label>
      <textarea
        name="what-i-did-last-week"
        className="h-64 w-full border-gray-400 border-2 rounded-lg p-3 disabled:text-red-800"
        disabled={disableForm}
      ></textarea>
      <div className="flex justify-between mt-2 pb-12">
        <LoadingComponent
          isLoading={isLoading}
          onComplete={() => {
            setIsLoading(false);
            setShowResult(true);
          }}
        />
        <button
          className="bg-slate-100 py-1.5 px-3 text-gray-950 rounded-lg text-center font-semibold items-center flex hover:bg-red-800 hover:text-white cursor-pointer"
          onClick={() => setIsLoading(true)}
          disabled={isLoading}
        >
          Submit
        </button>
      </div>
      {showResult && <Result />}
    </div>
  )
}

function LoadingSpinner() {
  return (
    <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
  )
}

function LoadingComponent({ isLoading, onComplete }: { isLoading: boolean, onComplete: () => void }) {
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isLoading, onComplete]);

  if (isLoading) {
    return (
      <div className="flex items-center ml-5">
        <LoadingSpinner />
        Praying to DOGE...
      </div>
    );
  }

  return <div/>;
}


