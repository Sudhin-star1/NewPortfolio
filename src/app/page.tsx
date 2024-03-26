// pages/index.tsx
import Head from 'next/head';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Sudhin Karki- Portfolio</title>
        <meta name="description" content="Your personal portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar />


      <main>
        <div className="container mx-auto my-20 text-center text-white">
          
          {/* Add more sections or components as needed */}
          <Portfolio />
          <Skills/>
          <Project/>
          <Contact/>
         
        </div>
      </main>
    </div>
  );
};

export default Home;
