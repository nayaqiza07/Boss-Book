import { Search02Icon } from "hugeicons-react";

const SearchTable = ({ title, query, setQuery, searchData }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-night_60">{title}</h2>
        <div className="flex flex-row gap-3">
          <form onSubmit={searchData}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded focus:outline-none w-32 lg:w-fit px-2 py-1"
              />
              <button className="absolute end-2 top-2">
                <Search02Icon size={20} />
              </button>
            </div>
          </form>

          <button className="flex items-center gap-2 border border-night_50 rounded px-2 py-1 text-night_50">
            {/* <HiOutlineFilter /> */}
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchTable;
