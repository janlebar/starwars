import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-transparent flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="h-20 lg:h-16 md:flex justify-between items-center" style={{ maxWidth: '761px', height: '127px' }}>
          <div className="flex items-center space-x-8"> {/* Increased space-x-8 */}
            <Link href="/" className="font-sans text-2xl font-bold leading-6 text-left">
              Upcoming
            </Link>
            <Link href="/" className="font-sans text-2xl font-bold leading-6 text-left">
              Legacy
            </Link>
          </div>
          <div className="flex-shrink-0 ml-8 mr-8"> {/* Added ml-8 (margin-left) and mr-8 (margin-right) */}
            <Image src="/logo.png" alt="Logo" width={210} height={127} />
          </div>
          <div className="hidden md:flex items-center space-x-8"> {/* Increased space-x-8 */}
            <Link href="/" className="font-sans text-2xl font-bold leading-6 text-left">
              Merch
            </Link>
            <Link href="/about" className="font-sans text-2xl font-bold leading-6 text-left">
              About
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;