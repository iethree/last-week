import { getFiringMessage } from "./messages";

export function Result() {
  // @ts-expect-error - doing unsafe stuff here
  const email = document.querySelector('[name="email"]')?.value;
  // @ts-expect-error - doing unsafe stuff here
  const whatIDidLastWeek = document.querySelector('[name="email"]')?.value;

  const { message } = getMessage({ email, work: whatIDidLastWeek });

  return (
    <Notification message={message} level={message.includes('Invalid') ? 'error' : 'info'} />
  );
}

function getMessage({ email, work }: { email: string, work: string }) {
  if (!email || !email.includes('@')) {
    return {
      message: "Invalid email. We will still find you and fire you.",
      level: 'error',
    }
  }

  if (!work) {
    return {
      message: "Invalid email. We will still find you and fire you.",
      level: 'error',
    }
  }

  if (Math.random() > 0.9) {
    return {
      message: "You get to keep your crappy job for another week.",
      level: 'success',
    }
  }

  return {
    message: getFiringMessage(),
    level: 'error',
  }
};

function Notification({ message }: { message: string, level: 'info' | 'error' }) {

  return (
    <div id="alert-additional-content-1" className="p-4 mb-4 border border-blue-300 rounded-lg bg-blue-50 bg-gray-800 text-blue-400 border-blue-800" role="alert">
      <div className="flex items-center">
        <svg className="shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">DOGE Decision</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">
        {message}
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <span className="pr-2">👍</span>
          Thank You
        </button>
        <a
          href="https://md.usembassy.gov/u-s-citizen-services/renounce-citizenship/"
          type="button"
          className="text-blue-300 bg-transparent border font-medium rounded-lg text-xs px-3 py-1.5 text-center hover:bg-blue-600 border-blue-600 text-blue-400 hover:text-white focus:ring-blue-800">
          <span className="pr-2">👎</span>
          I have an issue
        </a>
      </div>
    </div>
  )
}