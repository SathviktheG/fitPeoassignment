import { useMediaQuery } from 'react-responsive';
import { Bell, SearchIcon } from 'lucide-react';

const SearchSection = () => {
  const isMediumUp = useMediaQuery({ minWidth: 1280 });

  return isMediumUp ? (
    <div className="flex items-center bg-white px-4 rounded-[5px] border border-gray-200 h-12">
      <SearchIcon size={27} strokeWidth={1.8} className="text-blue-950" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none w-[90%] pl-4"
      />
      <Bell strokeWidth={2.5} className="text-blue-900" />
    </div>
  ) : (
    <div className="flex items-center justify-end bg-white px-4 rounded-[5px] border-0 border-gray-200 h-12">
      <SearchIcon size={24} strokeWidth={2} className="text-blue-950" />
    </div>
  );
};

export default SearchSection;
