import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name="description" content={description} />
        <link rel='icon' type="image/x-icon" href='/favicon.ico' />
      </Head>

      <Navbar />
      <div className="flex flex-col h-screen">
        <main className="mx-auto flex-grow w-full">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;

Layout.defaultProps = {
  title: 'Delray Locals',
  keywords: 'Delray Beach, Downtown, Atlantic Ave, Dining, Events, Community',
  description: 'Get to know all about Delray Beach Florida and all of the great things it has to offer!'
}