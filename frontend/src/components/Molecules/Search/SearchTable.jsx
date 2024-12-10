import { Search02Icon } from "hugeicons-react";

const SearchTable = ({ placeholder, query, setQuery, searchData }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <form onSubmit={searchData}>
          <div className="relative">
            <button className="absolute start-2 top-2 hidden">
              <Search02Icon size={20} />
            </button>
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border rounded-lg focus:outline-none w-32 lg:w-fit px-2 py-1"
            />
          </div>
        </form>

        <button className="flex items-center gap-2 border border-night_50 rounded px-2 py-1 text-night_50">
          {/* <HiOutlineFilter /> */}
          Filter
        </button>
      </div>
    </>
  );
};

export default SearchTable;
