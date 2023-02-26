import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase.config';
import Layout from "@/components/Layout";
import OrganizationCard from "@/components/OrganizationCard";

const Volunteer = ({ organizations }) => {
  return (
    <Layout title='Volunteer | Delray Locals'>
      <section className='pt-24 pb-14 px-4 lg:px-0'>
        <h1 className='text-center text-4xl font-black'>Volunteer</h1>
        <div className="max-w-[900px] mx-auto">
          <p className="text-center italic mt-4">&quot;We make a living by what we get, but we make a life by what we give.&ldquo;— Winston Churchill</p>
          <p className="mt-2">Welcome to the hub of volunteering opportunities in Delray Beach, Florida! This city is brimming with community-spirited individuals who are eager to make a positive impact, and we&apos;re here to connect you with the best ways to get involved.</p>
          <p className="mt-2">This web page serves as a guide to the volunteer opportunities available in Delray Beach. With so many ways to get involved, you&apos;re sure to find a cause that speaks to you and your passions.</p>
          <p className="mt-2">If you would like to add your organization to this list please contact us at <a href="mailto:hello@delraylocals.com">hello@delraylocals.com</a></p>
        </div>
        <div className="container max-w-[300px] md:max-w-[600px] lg:max-w-[900px] mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {organizations.map(organization => (
              <OrganizationCard key={organization.name} organization={organization} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Volunteer;

export const getStaticProps = async () => {
  const organizations = [];

  const organizationsRef = collection(db, 'organizations');
  const querySnap = await getDocs(organizationsRef);

  querySnap.forEach(doc => {
    if (doc.data().type === 'Volunteer') {
      organizations.push(doc.data());
    }
  });

  return {
    props: {
      organizations: organizations,
    }
  }
}