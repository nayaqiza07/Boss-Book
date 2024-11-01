import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <div>
      <div className="w-full flex border border-gray-300 items-center bg-white rounded-lg h-10 px-3 mb-5">
        <CiSearch size={20} />
        <input
          type="search"
          placeholder="Search"
          className="w-full h-full ml-3 focus:outline-none"
        />
      </div>
    </div>
  );
};
