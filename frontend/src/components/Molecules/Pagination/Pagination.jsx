// import { useLocation, useNavigate } from "react-router-dom";
// import ReactPaginate from "react-paginate";

import { useDispatch } from "react-redux";

const Pagination = ({ limitData, totalData, page, totalPage, setPage }) => {
  const dispatch = useDispatch();
  // const { search, pathname } = useLocation();
  // const navigate = useNavigate();

  // const handlePageChange = (number) => {
  //   console.log(number);
  //   console.log(search);
  //   console.log(pathname);

  //   setPage(page + 1);
  //   const searchParams = new URLSearchParams(search);
  //   searchParams.set("page", number);
  //   navigate(`${pathname}?${searchParams.toString()}`);
  // };

  // const handlePageChange = ({ selected }) => {
  //   const newOffset = selected + 1;
  //   setPage(newOffset);
  // };

  return (
    <>
      <div className="flex justify-between gap-3 pt-2">
        <div className="flex flex-row items-center gap-3">
          <p className="text-[#666666] text-sm">
            {limitData} of {totalData} data
          </p>
        </div>

        <nav className="flex flex-row items-center gap-3">
          <p className="text-[#666666] text-sm">
            {totalData ? page : 0} of {totalPage} pages
          </p>
          <button
            onClick={() => dispatch(setPage(page - 1))}
            disabled={page <= 1}
            className="text-[#666666] text-sm cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={() => dispatch(setPage(page + 1))}
            disabled={page === totalPage}
            className={`text-[#666666] text-sm cursor-pointer`}
          >
            Next
          </button>
          {/* <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={totalPage}
            onPageChange={handlePageChange}
          /> */}
        </nav>
      </div>
    </>
  );
};

export default Pagination;
