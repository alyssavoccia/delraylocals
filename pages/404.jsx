import Link from "next/link";
import Layout from "@/components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title='Page Not Found'>
      <section className="flex flex-col items-center pt-32">
        <h1 className="text-6xl font-bold mt-5">Sorry!</h1>
        <h2 className="text-4xl text-gray-400">This page does not exist.</h2>
        <Link className="text-2xl font-black mt-5 hover:text-gray-500 transition ease-in duration-200" href='/'>Return Home</Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage;