/* eslint-disable @next/next/no-img-element */
const OrganizationCard = ({ organization }) => {
  return (
    <div className="w-full max-w-[300px] shadow-md rounded border flex flex-col">
        <div className="relative pb-48 overflow-hidden">
          <img className="absolute inset-0 h-full w-full object-cover rounded-t" src={organization.imgUrl} alt={organization.name} />
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2  font-bold">{organization.name}</h2>
          <p>{organization.info}</p>
        </div>
        <a href={organization.website} className="p-4 mt-auto flex items-center text-sm text-blue-500 hover:text-blue-700 transition-all ease-in border-t">View Website</a>
    </div>
  )
}

export default OrganizationCard;