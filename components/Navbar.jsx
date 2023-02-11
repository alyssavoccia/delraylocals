import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

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
                    <Link href='#' onClick={() => setIsNavOpen(false)}>Home</Link>
                  </li>
                  <li className="py-4">
                    <Link href='#' onClick={() => setIsNavOpen(false)}>About</Link>
                  </li>
                  <li className="py-4">
                    <Link href='#' onClick={() => setIsNavOpen(false)}>Events</Link>
                  </li>
                  <li className="py-4">
                    <Link href='/dining' onClick={() => setIsNavOpen(false)}>Dining</Link>
                  </li>
                  <li className="py-4">
                    <Link href='#' onClick={() => setIsNavOpen(false)}>Living</Link>
                  </li>
                  <li className="py-4">
                    <Link href='#' onClick={() => setIsNavOpen(false)}>Community</Link>
                  </li>
                  <li className="py-4">
                    <Link href='#' onClick={() => setIsNavOpen(false)}>Contact</Link>
                  </li>
                </ul>
              </div>
            </section>
            <ul className="hidden lg:flex">
              <li className="px-2">
                <Link className={router.pathname === '/about' && 'text-blue-600'} href='/about'>About</Link>
              </li>
              <li className="px-2">
                <Link className={router.pathname === '/events' && 'text-blue-600'} href='/events'>Events</Link>
              </li>
              <li className="px-2">
                <Link className={router.pathname.includes('/dining')  && 'text-blue-600'} href='/dining'>Dining</Link>
              </li>
              <li className="px-2">
                <Link className={router.pathname === '/living' && 'text-blue-600'} href='/living'>Living</Link>
              </li>
              <li className="px-2">
                <Link className={router.pathname === '/get-involved' && 'text-blue-600'} href='/get-involved'>Get Involved</Link>
              </li>
              <li className="px-2">
                <Link className={router.pathname === '/contact' && 'text-blue-600'} href='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;