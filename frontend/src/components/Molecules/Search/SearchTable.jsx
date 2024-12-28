import Button from "@/components/Atoms/Button/Button";
import { Search02Icon } from "hugeicons-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchTable = (props) => {
  const {
    placeholder,
    query,
    setQuery,
    searchData,
    isHistory,
    historyPath,
    // setOpenModal,
  } = props;
  const dispatch = useDispatch();

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
              onChange={(e) => dispatch(setQuery(e.target.value))}
              className="border rounded-lg focus:outline-none w-32 lg:w-fit px-2 py-1"
            />
          </div>
        </form>

        {isHistory && (
          <Link to={historyPath}>
            <Button
              variant="primaryOutline"
              size="sm"
              // onClick={() => setOpenModal(true)}
            >
              History
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default SearchTable;
