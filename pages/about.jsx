/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout title='About | Delray Locals'>
      <section className='pt-24 pb-14 px-8 lg:px-0'>
        <h1 className='text-center text-4xl font-black'>About</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-4 xl:px-0 max-w-[1200px] mx-auto gap-4 items-center">
          <div>
            <p className="text-lg">At Delray Locals we believe Delray Beach is one of the best cities in America.</p>
            <p className="text-lg mt-2">Delray Beach, located in Palm Beach County, Florida, is a vibrant coastal city known for its beautiful beaches, exciting nightlife, and diverse cultural offerings. The city is home to a thriving downtown area, Atlantic Avenue, filled with shops, restaurants, and art galleries, as well as a variety of outdoor recreational activities, such as boating, fishing, and golf. </p>
            <p className="text-lg mt-2">Our website is dedicated to providing visitors with all the information they need to make the most of their time in Delray. Whether you’re looking for information on local events, restaurants, or attractions, you’ll find it here. </p>
          </div>
          <div>
            <img className="rounded" src='/images/delrayMarket.png' alt="Delray Market" />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <img className="rounded object-cover h-full" src='/images/beach.png' alt="Delray Market" />
              <img className="rounded" src='/images/water.png' alt="Delray Market" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About;