import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import UpcomingEvents from '@/components/UpcomingEvents';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <UpcomingEvents />
    </Layout>
  )
}