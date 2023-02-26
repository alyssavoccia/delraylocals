import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase.config';
import Layout from "@/components/Layout";
import OrganizationCard from "@/components/OrganizationCard";

const ProfessionalCommunity = ({ organizations }) => {
  return (
    <Layout title='Professional/Community Organizations | Delray Locals'>
      <section className='pt-24 pb-14 px-4 lg:px-0'>
        <h1 className='text-center text-4xl font-black'>Professional/Community Organizations</h1>
        <div className="max-w-[900px] mx-auto">
          <p className="mt-4">Delray Beach offers a wide range of professional and community organizations, each offering unique opportunities for personal and professional growth. Being a part of these organizations can bring numerous benefits to individuals including professional and personal development. </p>
          <p className="mt-2">Joining community organizations is an excellent way to give back to the community and make a positive impact. By participating in these organizations, individuals can build strong relationships with their neighbors and help to create a better, more connected community..</p>
          <p className="mt-2">Professional development is essential for anyone looking to advance in their careers. Through professional organizations, individuals can gain access to training programs, workshops, and conferences that can help them develop new skills and knowledge. They can also network with other professionals in their field, which can lead to job opportunities and new connections.</p>
          <p className="mt-2">Whether you&apos;re looking to get involved in your community, develop your professional skills, or connect with others in your field, Delray Beach has something to offer. Browse our directory of professional and community organizations to find the perfect opportunity for you.</p>
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

export default ProfessionalCommunity;

export const getStaticProps = async () => {
  const organizations = [];

  const organizationsRef = collection(db, 'organizations');
  const querySnap = await getDocs(organizationsRef);

  querySnap.forEach(doc => {
    if (doc.data().type === 'Professional/Community Organization') {
      organizations.push(doc.data());
    }
  });

  return {
    props: {
      organizations: organizations,
    }
  }
}