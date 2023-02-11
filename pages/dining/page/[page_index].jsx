/* eslint-disable react/no-unescaped-entities */
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase.config';
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import DiningCard from "@/components/DiningCard";
import DiningCategoryList from "@/components/DiningCategoryList";

const DiningPage = ({ restaurants, numPages, currentPage, categories }) => {
  return (
    <Layout title='Dining | Delray Locals'>
      <section className='pt-24 pb-14 px-8 lg:px-0'>
        <h1 className='text-center text-4xl font-black'>Dining</h1>
        <p className="text-center text-lg mt-2 font-semibold max-w-[600px] mx-auto">
          Welcome to Delray Beach's Dining Guide, where taste buds and culinary adventures come together!
        </p>
        <div className="max-w-[800px] mx-auto">
          <p className="mt-3">
            Delray Beach is a city that takes its food seriously, and this directory is the ultimate resource for finding the best dining experiences the city has to offer. Whether you're looking for a quick bite or a memorable meal, this guide will lead you to the most delectable dishes and dining destinations in town.
          </p>
          <p className="mt-3">
            From seaside cafes to upscale restaurants, our directory features only the most highly recommended eateries, so you can be confident in your dining choices. Browse through a diverse range of cuisines, from fresh seafood to sizzling steaks, and discover your new favorite restaurant in Delray Beach.
          </p>
          <p className="mt-3">
            So, loosen your belts and sharpen your forks, it's time to embark on a flavorful culinary tour of Delray Beach!
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap max-w-[1100px] justify-center mx-auto mt-16">
          <DiningCategoryList categories={categories} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-center mx-auto px-4 col-span-2'>
          {restaurants.map((restaurant, i) => (
            <DiningCard restaurant={restaurant} key={i} />
          ))}
          <Pagination currentPage={currentPage} numPages={numPages} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DiningPage;

export async function getStaticPaths() {
  const restaurants = [];

  const restaurantsRef = collection(db, 'restaurants');
  const querySnap = await getDocs(restaurantsRef);

  querySnap.forEach(doc => {
    restaurants.push(doc.data());
  });

  const numPages = Math.ceil(restaurants.length / 10);

  const paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() }
    });
  }


  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const page = parseInt((params && params.page_index) || 1);

  const restaurants = [];

  const restaurantsRef = collection(db, 'restaurants');
  const querySnap = await getDocs(restaurantsRef);

  querySnap.forEach(doc => {
    restaurants.push(doc.data());
  });

  const categories = [];
  restaurants.map(restaurant => {
    if (restaurant.type.includes('/')) {
      categories.push(restaurant.type.replace('/', '-').toLowerCase());
    } else {
      categories.push(restaurant.type.toLowerCase());
    }
  });

  const uniqueCategories = [...new Set(categories)];

  const numPages = Math.ceil(restaurants.length / 10);
  const pageIndex = page - 1;
  const orderedRests = restaurants.slice(pageIndex * 10, (pageIndex + 1) * 10);

  return {
    props: {
      restaurants: orderedRests,
      numPages,
      currentPage: page,
      categories: uniqueCategories
    }
  }
}