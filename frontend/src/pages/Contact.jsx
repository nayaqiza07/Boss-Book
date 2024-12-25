import { useCallback, useEffect, useState } from "react";
import { AddUser } from "react-iconly";

// API
import { getClients, createClient } from "@/api/clientApi";

// Assets
import { BigUser2 } from "@/assets/Icon/BigUser2";

// Components

// Atoms
import Button from "@components/Atoms/Button/Button";

// Molecules
import { DataEmpty } from "@components/Molecules/404/DataEmpty";

import { Card } from "@components/Organisms/Card/Card";
import ModalAddContact from "@/components/Organisms/Modal/ModalAddContact";
import Pagination from "@components/Molecules/Pagination/Pagination";
import SearchTable from "@components/Molecules/Search/SearchTable";
import TableContact from "@/components/Organisms/Table/TableContact";
import TableContactMobile from "@/components/Organisms/Table/TableContactMobile";

// Redux Actions
import { useDispatch, useSelector } from "react-redux";
import {
  setLimitData,
  setTotalData,
  setPage,
  setTotalPage,
  setKeyword,
  setQuery,
} from "@/redux/slices/paginationSlice";

const Contact = () => {
  const { limitData, totalData, page, totalPage, keyword, query } = useSelector(
    (state) => state.paginationState
  );
  const dispatch = useDispatch();
  const [openModalClient, setOpenModalClient] = useState(false);

  const [dataClients, setDataClients] = useState([]);

  const fetchDataClient = useCallback(
    (keyword, page) => {
      getClients(keyword, page).then(
        ({ client, limitClient, totalClient, currentPage, totalPage }) => {
          setDataClients(client);

          dispatch(setLimitData(limitClient));
          dispatch(setTotalData(totalClient));
          dispatch(setPage(currentPage));
          dispatch(setTotalPage(totalPage));
        }
      );
    },
    [dispatch]
  );

  useEffect(() => {
    fetchDataClient(keyword, page);
  }, [keyword, page, fetchDataClient]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    await createClient(data.name, data.role, data.phone, data.address);
    fetchDataClient(keyword, page);
  };

  const searchData = (e) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(setKeyword(query));
  };

  return (
    <div className="p-5 grid gap-5">
      {/* Top Start */}
      <section className="grid grid-rows-1 grid-cols-1">
        <div className="flex justify-between items-center">
          <h1 className="text-night_60 font-medium">Contact</h1>
          <Button
            variant="primary"
            size="md"
            onClick={() => setOpenModalClient(true)}
            className="flex gap-1"
          >
            <AddUser primaryColor="white" />
            New Contact
          </Button>
        </div>
      </section>
      {/* Top Start */}

      {/* Second Start */}
      <section className="grid grid-rows-1 grid-cols-1">
        <Card>
          {dataClients?.length === 0 ? (
            <DataEmpty
              icon={<BigUser2 />}
              title={"Add Your Contact"}
              subTitle={"Add contact to this section"}
            />
          ) : (
            <>
              {/* Second Head Start */}
              <SearchTable
                placeholder="Enter contact name"
                query={query}
                setQuery={setQuery}
                searchData={searchData}
              />
              {/* Second Head End */}

              {/* Second Table Start */}
              <div className="hidden overflow-x-auto mt-5 md:block">
                <TableContact dataClients={dataClients} />
              </div>
              {/* Second Table End */}

              {/* Table view up to the `md:` breakpoint Start  */}
              <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
                <TableContactMobile dataClients={dataClients} />
              </div>
              {/* Table view up to the `md:` breakpoint End  */}
            </>
          )}

          {/* Second Pagination Start */}
          <Pagination
            // handlePageChange={handlePageChange}
            limitData={limitData}
            totalData={totalData}
            page={page}
            totalPage={totalPage}
            setPage={setPage}
          />
          {/* Second Pagination End */}
        </Card>
      </section>
      {/* Second End */}

      <ModalAddContact
        openModalClient={openModalClient}
        setOpenModalClient={setOpenModalClient}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Contact;
