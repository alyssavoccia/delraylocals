/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mt-auto bg-gray-300">
      <div className="max-w-[1200px] mx-auto text-center py-10">
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/events'>Events</Link>
          </li>
          <li>
            <Link href='/dining'>Dining</Link>
          </li>
          <li>
            <Link href='/living'>living</Link>
          </li>
          <li>
            <Link href='/get-involved'>Get Involved</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between mt-8 py-8 px-4 xl:px-0 border-gray-400 border-t border-b items-center'>
          <div className='text-center md:text-left items-cener mb-4 md:mb-0'>
            <h2 className='text-md font-bold text-gray-700'>Subscribe to our newsletter</h2>
            <p className='text-sm text-gray-500 w-100 md:w-3/4'>Get weekly newsletters in your inbox to know what's going on in Delray Beach!</p>
          </div>
          <div className='flex items-center'>
            <label className="relative block h-[40px] mr-2">
              <span className="sr-only">Enter your email</span>
              <input className="placeholder:italic placeholder:text-gray-400 block bg-white w-full rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[40px]" placeholder="Enter your email" type="text" name="email"/>
            </label>
            <button className='bg-blue-700 hover:bg-blue-600 px-2 py-2 rounded text-white shadow-sm md:w-100'>Notify me!</button>
          </div>
        </div>
      </div>
      <p className="mt-3 pb-2 text-center">© {new Date().getFullYear()} Delray Locals. All rights reserved</p>
    </section>
  )
}

export default Footer;