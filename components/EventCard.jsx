import Link from "next/link";

const EventCard = () => {
  return (
    <div className="flex flex-col mb-10">
      <span className="inline-block text-sm font-semibold text-gray-700 mb-1">January 28, 2023</span>
      <p className="font-extrabold mb-2">Delray Event</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate vehicula nisi, nec laoreet odio commodo sed. Duis rhoncus id lorem in scelerisque.
      </p>
      <Link className="mt-2 text-blue-800 hover:text-blue-700 transition-all font-bold self-start" href='#'>Event Details</Link>
    </div>
  )
}

export default EventCard;