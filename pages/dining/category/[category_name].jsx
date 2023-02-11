import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase.config';
import Layout from '@/components/Layout';
import DiningCategoryList from "@/components/DiningCategoryList";
import DiningCard from "@/components/DiningCard";

const CategoryPage = ({ restaurants, categoryName, categories }) => {
  return (
    <Layout>
      <section className="flex flex-col justify-between py-24 px-8 lg:px-0 max-w-[1200px] mx-auto">
        <h1 className="text-3xl text-center text-gray-700 font-extrabold sm:text-4xl">{categoryName[0].toUpperCase() + categoryName.slice(1)}</h1>
        <div className="flex flex-wrap md:flex-nowrap max-w-[1100px] justify-center mx-auto mt-16">
          <DiningCategoryList categories={categories} isActive={categoryName} />
          <div className="grid lg:grid-cols-2 gap-5">
            {restaurants.map((restaurant, i) => (
              <DiningCard key={i} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CategoryPage;

export async function getStaticPaths() {
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

  const paths = categories.map(category => ({
    params: {category_name: category}
  }));

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: {category_name} }) => {
  const categoryName = category_name;
  const restaurants = [];

  const restaurantsRef = collection(db, 'restaurants');
  const querySnap = await getDocs(restaurantsRef);

  querySnap.forEach(doc => {
    restaurants.push(doc.data());
  });

  const categoryPosts = [];
  restaurants.map(restaurant => {
    if (restaurant.type.toLowerCase() === categoryName) {
      categoryPosts.push(restaurant);
    }
  });

  const categories = [];
  restaurants.map(restaurant => {
    categories.push(restaurant.type.toLowerCase());
  })
  const uniqueCategories = [...new Set(categories)];

  return {
    props: {
      restaurants: categoryPosts,
      categoryName,
      categories: uniqueCategories
    }
  }
}