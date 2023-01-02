import { FC } from 'react';
import Image from 'next/image';

type Props = {
	img: string;
	location: string;
	distance: string;
};

const SmallCard: FC<Props> = ({ img, location, distance }) => {
	return (
		<div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
		hover:scale-105 transition transform duration-200 ease-out'
		>
			<div className='relative h-16 w-16'>
				<Image
					src={img} 
					alt='card image' 
					fill 
					className='rounded-lg'
				>
				</Image>
			</div>
			<div className=''>
				<h2>{location}</h2>
				<h3 className='text-gray-500'>{distance}</h3>
			</div>
		</div>
	);
};

export default SmallCard;
