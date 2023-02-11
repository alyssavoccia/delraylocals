/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <div className="flex justify-center items-center relative h-screen">
      <div className="z-20 text-white text-center">
        <h1 className=" text-5xl font-extrabold mb-4">The Village By the Sea</h1>
        <p className="text-2xl font-medium">Don't miss out on the fun in Delray Beach</p>
        <p className="text-2xl font-medium">Subscribe now and stay in the know!</p>
        <div className="flex items-center justify-center mt-4">
          <label className="relative block h-[40px] mr-2">
            <span className="sr-only">Enter your email</span>
            <input className="placeholder:italic placeholder:text-slate-400 text-gray-700 block bg-white w-full rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[42px]" placeholder="Enter your email" type="text" name="search"/>
          </label>
          <button className="block bg-blue-700 hover:bg-blue-600 transition-all px-4 py-2 rounded w-36 font-extrabold text-lg" href='#'>Subscribe</button>
        </div>
      </div>
      <div className="z-10 absolute top-0 left-0 w-screen h-screen videoHero"></div>
      <video autoPlay muted loop className='z-0 absolute top-0 left-0 w-screen h-screen object-cover'>
        <source src='./heroVideo.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default Hero;