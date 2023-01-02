import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

interface FetchData {
  img: string;
  location: string;
  distance: string;
  title: string;
}

interface Props {
  exploreData: FetchData[];
  cardsData: FetchData[];
}

const Home: NextPage<Props> = ({ exploreData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/*Pull data from server*/}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img, location, distance}) => (
              <SmallCard 
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>
            Live Anywhere
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
             {cardsData.map(({img, title}) => (
            <MediumCard 
              key={img}
              img={img}
              title={title}
            />
           ))}
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resExploreData = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = (await resExploreData.json()) as FetchData;

  const resCardsData = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const cardsData = (await resCardsData.json()) as FetchData; 

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
};

export default Home;


