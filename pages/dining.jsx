/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase.config';
import Layout from "@/components/Layout";
import DiningCard from "@/components/DiningCard";

const DiningPage = ({ restaurants, categories }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState(restaurants);
  const [selectedCat, setSelectedCat] = useState('All');
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currRestaurants = selectedRestaurants.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(selectedRestaurants.length / 10);

  useEffect(() => {
    if (selectedCat !== 'All') {
      setSelectedRestaurants(restaurants.filter(restaurant => restaurant.type === selectedCat));
    } else {
      setSelectedRestaurants(restaurants);
    }
  }, [selectedCat, restaurants]);

  const handleClick = (e) => {
    const newOffset = (e.selected * 10) % selectedRestaurants.length;
    setItemOffset(newOffset);
  };

  return (
    <Layout title='Dining | Delray Locals'>
      <section className='pt-24 pb-14 px-4 lg:px-0'>
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
          <div className="w-full md:w-[200px] mb-8 md:mb-0 pl-4">
            <p className="font-bold text-lg">Categories</p>
            <ul className="flex flex-wrap md:flex-col gap-3 mt-2">
              <li className={`flex gap-2 items-center cursor-pointer hover:text-blue-700 transition-all ${selectedCat === 'All' ? 'text-blue-700' : ''}`} onClick={() => setSelectedCat('All')}>
                All
              </li>
              {categories.map((category, i) => (
                <li key={i} className={`flex gap-2 items-center cursor-pointer hover:text-blue-700 transition-all ${category === selectedCat ? 'text-blue-700' : ''}`} onClick={() => setSelectedCat(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-center mx-auto col-span-2'>
              {currRestaurants.map((restaurant, i) => (
                <DiningCard restaurant={restaurant} key={i} />
              ))}
            </div>
            {pageCount > 1 && (
              <ReactPaginate 
                className='flex gap-3 mt-4 items-center text-lg'
                breakLabel='...'
                nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                onPageChange={handleClick}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                renderOnZeroPageCount={null}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DiningPage;

export const getStaticProps = async () => {
  const restaurants = [];

  const restaurantsRef = collection(db, 'restaurants');
  const querySnap = await getDocs(restaurantsRef);

  querySnap.forEach(doc => {
    restaurants.push(doc.data());
  });

  const categories = [];
  restaurants.map(restaurant => {
    categories.push(restaurant.type);
  });

  const uniqueCategories = [...new Set(categories)];

  return {
    props: {
      restaurants: restaurants,
      categories: uniqueCategories
    }
  }
}