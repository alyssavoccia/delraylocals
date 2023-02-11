import EventCard from "./EventCard";

/* eslint-disable react/no-unescaped-entities */
const UpcomingEvents = () => {
  const upcomingEvents = [1, 2, 3, 4];

  return (
    <section className='container max-w-[1200px] mx-auto py-12 px-4 xl:px-0'>
      <div className='flex flex-wrap justify-center lg:justify-between'>
        <div className='text-center lg:text-left mb-4 lg:mb-0'>
          <h2 className='text-3xl font-bold text-blue-800 mb-4'>Upcoming Events</h2>
          <p className='text-xl text-gray-500 w-100 lg:w-3/4'>Get weekly newsletters in your inbox to know what's going on in Delray Beach!</p>
        </div>
        <div className='flex lg:items-end'>
          <label className="relative block h-[40px] mr-2">
            <span className="sr-only">Enter your email</span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[40px]" placeholder="Enter your email" type="text" name="search"/>
          </label>
          <button className='bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white shadow-sm'>Notify me!</button>
        </div>
      </div>
      <div className="sm:columns-1 md:columns-2 py-10">
        {upcomingEvents.map((event, i) => (
          <EventCard key={i} />
        ))}
      </div>
    </section>
  )
}

export default UpcomingEvents;