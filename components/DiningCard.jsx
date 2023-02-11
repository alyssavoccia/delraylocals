import Link from "next/link";

const DiningCard = ({ restaurant }) => {
  return (
    <div className='flex flex-col shadow-md rounded h-100'>
      <div className="p-2 bg-gray-100 rounded-t">
        <p className='font-bold'>{restaurant.name}</p>
      </div>
      <div className="p-2">
        <p>{restaurant.address}</p>
        <p>{restaurant.phone}</p>
      </div>
      <div className="p-2 mt-auto">
        <Link className="text-blue-600 hover:text-blue-800 transition-all font-semibold" href={restaurant.website }>Visit Website</Link>
      </div>
  </div>
  )
}

export default DiningCard