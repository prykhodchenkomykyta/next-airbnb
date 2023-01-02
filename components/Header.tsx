import { FC, useState } from 'react';
import Image from 'next/image';
import { 
	MagnifyingGlassIcon,
	UsersIcon,
	Bars3Icon,
	UserCircleIcon
} from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';


type Props = {
  placeholder: string;
}

const Header: FC<Props> = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numOfGuests, setNumOfGuests] = useState<number | string>(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput('');
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  };

	return (
  <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
    {/* Left */}
    <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
      <Image 
        src='https://links.papareact.com/qd3'
        alt='logo'
        fill
        className='object-contain object-left'
      />
    </div>
    {/* Middle - Search*/}
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
    	<input 
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        type="text" 
        placeholder={placeholder || 'Start your search'} 
        className='flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400' 
      />
    	<MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
    </div>
    {/* Right */}
    <div className='flex space-x-2 items-center justify-end text-gray-500'>
    	<p className='hidden md:inline cursor-pointer'>Become a host</p>
    	<GlobeAltIcon className='h-6 cursor-pointer' />

    	<div className='flex border-2 rounded-full space-x-2 items-center p-2'>
    		<Bars3Icon className='h-6 cursor-pointer' />
    		<UserCircleIcon className='h-6 cursor-pointer' />
    	</div>
    </div>
    {searchInput && (
      <div className='flex flex-col col-span-3 mx-auto'>
        <DateRangePicker 
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#FD5B61']}
          onChange={handleSelect}
        />
        <div className='flex items-center border-b mb-4'>
          <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
          <UsersIcon className='h-5' />
          <input
            value={numOfGuests}
            onChange={e => setNumOfGuests(e.target.value)}
            min={1} 
            type="number" 
            className='w-12 pl-2 text-lg outline-none text-red-400' 
          />
        </div>
        <div className='flex'>
          <button
            onClick={resetInput} 
            className="flex-grow text-gray-500"
          >
            Cancel
          </button>
          <button 
            onClick={search}
            className="flex-grow text-red-400"
          >
            Search
          </button>
        </div>
      </div>
    )}
  </header>
);
};

export default Header;
