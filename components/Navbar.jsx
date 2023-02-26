import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed z-50 w-screen">
      <nav className="bg-white shadow-md px-2">
        <div className="max-w-[1200px] flex justify-between px-4 lg:px-0 py-4 mx-auto items-center">
          <div>
            <Link className="font-bold text-lg" href="/">Delray Locals</Link>
          </div>
          <nav >
            <section className="flex lg:hidden mobileMenu">
              <div className="space-y-2 hamburgerIcon" onClick={() => setIsNavOpen(prev => !prev)}>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
              <div className={`${isNavOpen ? 'translate-x-0 ' : 'translate-x-full'} flex fixed top-0 right-0 min-w-[300px] w-screen h-screen bg-white z-10 flex-col justify-center transition-all duration-300`}>
                <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between">
                  <li className="py-4">
                    <Link className={`${router.pathname === '/' && 'text-blue-600'}`} href='/' onClick={() => setIsNavOpen(false)}>Home</Link>
                  </li>
                  <li className="py-4">
                    <Link className={`${router.pathname === '/about' && 'text-blue-600'}`} href='/about' onClick={() => setIsNavOpen(false)}>About</Link>
                  </li>
                  <li className="py-4">
                    <Link className={`${router.pathname === '/events' && 'text-blue-600'}`} href='/events' onClick={() => setIsNavOpen(false)}>Events</Link>
                  </li>
                  <li className="py-4">
                    <Link className={`${router.pathname === '/dining' && 'text-blue-600'}`} href='/dining' onClick={() => setIsNavOpen(false)}>Dining</Link>
                  </li>
                  <li className="py-4">
                    <Link className={`${router.pathname === '/living' && 'text-blue-600'}`} href='/living' onClick={() => setIsNavOpen(false)}>Living</Link>
                  </li>
                  <li className="py-4 relative">
                    <p className={`${router.pathname.includes('/get-involved') && 'text-blue-600'} w-full flex items-center cursor-pointer`} onClick={toggleDropdown}>
                      Get Involved
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform transform ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 13a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 13z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                    {isDropdownOpen && (
                      <ul className="absolute top-full left-[-2rem] rounded w-[220px] p-4 bg-gray-100">
                        <li>
                          <Link className={`${router.pathname === '/get-involved/volunteer' && 'text-blue-600'} hover:text-blue-600`} href="/get-involved/volunteer"  onClick={() => setIsNavOpen(false)}>Volunteer</Link>
                        </li>
                        <li className="mt-3">
                          <Link className={`${router.pathname === '/get-involved/professional-community' && 'text-blue-600'} hover:text-blue-600`} href="/get-involved/professional-community"  onClick={() => setIsNavOpen(false)}>Professional/Community</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="py-4">
                    <Link className={`${router.pathname === '/contact' && 'text-blue-600'}`} href='/contact' onClick={() => setIsNavOpen(false)}>Contact</Link>
                  </li>
                </ul>
              </div>
            </section>
            <ul className="hidden lg:flex">
              <li className="px-2">
                <Link className={`${router.pathname === '/about' && 'text-blue-600'} hover:text-blue-600 transition-all duration-150 ease-in`} href='/about'>About</Link>
              </li>
              <li className="px-2">
                <Link className={`${router.pathname === '/events' && 'text-blue-600'} hover:text-blue-600 transition-all duration-150 ease-in`} href='/events'>Events</Link>
              </li>
              <li className="px-2">
                <Link className={`${router.pathname.includes('/dining')  && 'text-blue-600'} hover:text-blue-600 transition-all duration-150 ease-in`} href='/dining'>Dining</Link>
              </li>
              <li className="px-2">
                <Link className={`${router.pathname === '/living' && 'text-blue-600'} hover:text-blue-600 transition-all duration-150 ease-in`} href='/living'>Living</Link>
              </li>
              <li className="px-2 relative getInvolved">
                <p className={`${router.pathname.includes('/get-involved') && 'text-blue-600'} hover:text-blue-600 transition-all duration-150 ease-in flex items-center cursor-default`} href='/get-involved'>Get Involved <FontAwesomeIcon className='pt-1 pl-1' icon={faAngleDown} /></p>
                <div className="bg-white shadow-md border p-2 absolute flex flex-col getInvolvedBox">
                  <Link className={`${router.pathname === '/get-involved/volunteer' && 'text-blue-600'} transition-all duration-150 ease-in hover:text-blue-600`} href='/get-involved/volunteer'>Volunteer</Link>
                  <Link className={`${router.pathname === '/get-involved/professional-community' && 'text-blue-600'} transition-all duration-150 ease-in hover:text-blue-600 mt-3`} href='/get-involved/professional-community'>Professional/Community</Link>
                </div>
              </li>
              <li className="px-2">
                <Link className={`${router.pathname === '/contact' && 'text-blue-600'} hover:text-blue-600 transition-all duration-150 ease-in`} href='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;