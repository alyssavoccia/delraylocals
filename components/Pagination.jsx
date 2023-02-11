import Link from "next/link";

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/dining/page/${currentPage - 1}`;
  const nextPage = `/dining/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className="mt-6">
      <ul className="flex flex-wrap md:flex-nowrap gap-2 pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage}>
            <li className="relative block py-2 px-3 leading-tight border border-blue-200 text-blue-600 mr-1 hover:bg-blue-200 cursor-pointer transition duration-200 rounded font-semibold">Previous</li>
          </Link>
        )}
        
        {Array.from({length: numPages}, (_, i) => (
          <Link key={i} href={`/dining/page/${i + 1}`}>
            <li className={`relative block py-2 px-3 leading-tight border border-blue-200 text-blue-600 mr-1 hover:bg-blue-200 ${i + 1 === currentPage && 'bg-blue-200'} cursor-pointer transition duration-200 rounded font-semibold`}>{i + 1}</li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className="relative block py-2 px-3 leading-tight border border-blue-200 text-blue-600 mr-1 hover:bg-blue-200 cursor-pointer transition duration-200 rounded font-semibold">Next</li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Pagination;