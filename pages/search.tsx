import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';


type Props = {
	img?: string;
	location: string;
	title: string;
	description: string;
	star: number;
	price: number;
	total: number;
}

const Search: FC<Props> = ({ searchResults }) => {
	const router = useRouter();

	const { location, startDate, endDate, numOfGuests } = router.query;

	const formattedStartDate = startDate && format(new Date(startDate), "dd MMMM yy");
	const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy");
	const range = `${formattedStartDate} - ${formattedEndDate}`;

	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

			<main className='flex'>
				<section className='flex-grow pt-14 px-6'>
					<p className='text-xs'>300+ Stays - {range} - for {numOfGuests} guests</p>

					<h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

					<div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitetespace-nowrap'>
						<p className='button'>
							Cancellation Flexibility
						</p>
						<p className='button'>
							Type of Place
						</p>
						<p className='button'>
							Price
						</p>
						<p className='button'>
							Rooms and Beds
						</p>
						<p className='button'>
							More filters
						</p>
					</div>

					<div className='flex flex-col'>
						{searchResults?.map(({ img, location, title, description, star, price, total }) => (
							<InfoCard
								key={img}
								img={img}
								location={location}
								title={title}
								description={description}
								star={star}
								price={price}
								total={total}
							/>
						))}
					</div>
				</section>
				<section className='hidden xl:inline-flex xl:min-w-[40%] sticky top-[76px] h-[calc(100vh-76px)]'>
					<Map searchResults={searchResults} />
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Search;

export const getServerSideProps: GetServerSideProps = async () => {
	const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
	.then((res) => res.json());

	return {
		props: {
			searchResults
		}
	};
};
