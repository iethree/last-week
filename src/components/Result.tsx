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
      message: "You get to keep your crappy job for now.",
      level: 'success',
    }
  }

  return {
    message: "You're fired.",
    level: 'error',
  }
};

function Notification({ message }: { message: string, level: 'info' | 'error' }) {
  // const colors = {
  //   error: 'bg-red-50 text-red-800 border-red-300 dark:bg-red-800 dark:text-red-50 dark:border-red-800',
  //   warning: 'bg-yellow-50 text-yellow-800 border-yellow-300 dark:bg-yellow-800 dark:text-yellow-50 dark:border-yellow-800',
  //   success: 'bg-green-50 text-green-800 border-green-300 dark:bg-green-800 dark:text-green-50 dark:border-green-800',
  //   info: 'bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-800 dark:text-blue-50 dark:border-blue-800',
  // };

  return (
    <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
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
          className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
          <span className="pr-2">👍</span>
          Thank You
        </button>
        <a
          href="https://md.usembassy.gov/u-s-citizen-services/renounce-citizenship/"
          type="button"
          className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800">
          <span className="pr-2">👎</span>
          I have an issue
        </a>
      </div>
    </div>
  )
}