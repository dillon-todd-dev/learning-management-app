import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-customgreys-secondarybg bottom-0 w-full py-8 mt-10 text-center text-sm'>
      <p>&copy; 2024 DILLONTODD. All Rights Reserved.</p>
      <div className='mt-2'>
        {['About', 'Privacy Policy', 'Licensing', 'Contact'].map(
          (item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className='text-primary-500 mx-2'
            >
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
