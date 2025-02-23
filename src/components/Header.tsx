import flag from '../assets/usflag.svg';
import { useState } from 'react';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full">
      <div className="flex flex-row justify-center items-center container mx-auto pt-2 pb-1 text-xs text-center text-white font-extrabold">
        <img
          alt="US Flag"
          loading="lazy"
          width="48"
          height="48"
          decoding="async"
          data-nimg="1"
          className="w-4 h-4 text-blue-500 mb-[1px]"
          style={{ color: "transparent" }}
          src={flag}
        />
        &nbsp;&nbsp;An unofficial mockery of the United States government
      </div>
      <div className="container mx-auto max-w-7xl py-2">
        <div className="flex flex-col space-y-2 md:space-y-4">
          <div className="flex items-center justify-between">
            <a className="flex items-center gap-3 md:gap-4" href="/">
              <img
                src="https://imagedelivery.net/Eq3GW7G6_BQgeWvh9nuCig/194f0beb-51d5-4623-64c3-462cbf5a5800/public"
                alt="DOGE"
                width="48"
                height="48"
                className="h-8 md:h-12 w-auto"
              />
              <div>
                <h1 className="text-gray-50 text-base md:text-xl font-semibold">
                  <span className="block md:hidden text-xl">DOGE</span>
                  <span className="hidden md:block">Department of Government Efficiency</span>
                </h1>
                <p className="hidden md:block text-gray-400 text-xs lg:text-sm" title="hard as it is to believe">
                  The people voted for major reform.
                </p>
              </div>
            </a>
            <button className="lg:hidden text-gray-50 p-2 cursor-pointer" aria-label="Toggle menu" onClick={() => setShowMenu(old => !old)}>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <a className="text-gray-300 hover:text-gray-50 transition-colors" href="https://www.doge.gov/savings">
                    Savings
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-50 transition-colors" href="https://www.doge.gov/spend">
                    Spend
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-50 transition-colors" href="https://www.doge.gov/workforce">
                    Workforce
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-50 transition-colors" href="https://www.doge.gov/regulations">
                    Regulations
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-50 transition-colors" href="https://www.doge.gov/join">
                    Join
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-gray-300 hover:text-gray-50 transition-colors"
                    href="https://www.whitehouse.gov/presidential-actions/2025/01/establishing-and-implementing-the-presidents-department-of-government-efficiency/"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-gray-800"></div>
          <div className="flex justify-end">
            <nav>
              <ul className="flex items-center space-x-6"></ul>
            </nav>
          </div>
        </div>
      </div>
      <nav className={`${showMenu ? '' : 'hidden'} lg:hidden`}><ul className="flex flex-col space-y-4 pb-4 border-gray-800 border-b">
      <li><a className="block text-sm lg:text-base text-gray-300 hover:text-gray-50 transition-colors" href="https://doge.gov/savings">Savings</a></li>
      <li><a className="block text-sm lg:text-base text-gray-300 hover:text-gray-50 transition-colors" href="https://doge.gov/spend">Spend</a></li>
      <li><a className="block text-sm lg:text-base text-gray-300 hover:text-gray-50 transition-colors" href="https://doge.gov/workforce">Workforce</a></li>
      <li><a className="block text-sm lg:text-base text-gray-300 hover:text-gray-50 transition-colors" href="https://doge.gov/regulations">Regulations</a></li>
      <li><a className="block text-sm lg:text-base text-gray-300 hover:text-gray-50 transition-colors" href="https://doge.gov/join">Join</a></li>
      <li><a target="_blank" className="block text-sm lg:text-base text-gray-300 hover:text-gray-50 transition-colors" href="https://www.whitehouse.gov/presidential-actions/2025/01/establishing-and-implementing-the-presidents-department-of-government-efficiency/">About</a></li></ul></nav>
    </header>
  );
  }