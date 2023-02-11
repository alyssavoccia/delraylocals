import Link from "next/link";

const DiningCategoryList = ({ categories, isActive }) => {
  return (
    <div className="w-full md:w-[200px] mb-8 md:mb-0 pl-4">
      <p className="font-bold text-lg">Categories</p>
      <ul className="flex flex-wrap md:flex-col gap-3 mt-2">
        <li className={`flex gap-2 items-center cursor-pointer hover:text-blue-700 transition-all ${!isActive ? 'text-blue-700' : ''}`}>
          <Link href='/dining'>All</Link>
        </li>
        {categories.map((category, i) => (
          <li key={i} className={`flex gap-2 items-center cursor-pointer hover:text-blue-700 transition-all ${category === isActive ? 'text-blue-700' : ''}`}>
            <Link href={`/dining/category/${category.toLowerCase()}`} target='_blank'>{category[0].toUpperCase() + category.slice(1)}</Link> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DiningCategoryList;