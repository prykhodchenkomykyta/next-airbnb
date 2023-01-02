// 404.js
import Link from 'next/link';

const FourOhFour = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500'>
      <h1 className='text-lg font-semibold'>Oooops...</h1>
      <h2 className='text-lg font-semibold text-red-700'>That page cannot be found</h2>
        <p className='text-2xl font-semibold'>Go back to the <Link href='/'><span className='hover:text-blue-900 font-bold'>Homepage</span></Link></p>
    </div>
  );
};

export default FourOhFour;
