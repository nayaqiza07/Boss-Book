const SearchTable = ({ title, search, setSearch }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-night_60">{title}</h2>
        <div className="flex flex-row gap-3">
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded focus:outline-none w-32 lg:w-fit px-2 py-1"
          />

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
