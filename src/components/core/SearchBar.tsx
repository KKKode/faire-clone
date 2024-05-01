import { TfiClose } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div className="w-1/2 flex items-center justify-between gap-2 border border-gray-500 rounded-[30px] px-4 py-2">
      <input
        id="search-input"
        type="text"
        placeholder="Search products or brands"
        className="w-full outline-none"
      />
      <span className="cursor-pointer">
        {/* <TfiClose fontSize={16} /> */}
        <IoSearchOutline fontSize={20} />
      </span>
    </div>
  );
};

export default SearchBar;
