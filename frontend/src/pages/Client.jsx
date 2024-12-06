import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { ModalAddClient } from "../components/Modal/ModalAddClient";

import { AddUser } from "../components/Icon/Icon";
import { DataEmpty } from "../components/Alert/DataEmpty";
import { BigUser2 } from "../assets/Icon/BigUser2";
import TableClient from "../components/Table/TableClient";
import TableClientMobile from "../components/Table/TableClientMobile";
import { getClients, createClient } from "../api/clientApi";
import Pagination from "../components/Pagination/Pagination";
import SearchTable from "../components/Search/SearchTable";
import Button from "../components/Button/Button";

const Client = () => {
  const [openModalClient, setOpenModalClient] = useState(false);

  // const [search, setSearch] = useState("");
  const [dataClients, setDataClients] = useState([]);

  // Pagination
  const [limitClient, setLimitClient] = useState(0);
  const [totalClient, setTotalClient] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  // Search
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  // console.log(limitClient, totalClient, page, totalPages);

  useEffect(() => {
    fetchDataClient(keyword, page);
  }, [keyword, page]);

  const fetchDataClient = (keyword, page) => {
    getClients(keyword, page).then(
      ({ client, limitClient, totalClient, currentPage, totalPage }) => {
        setDataClients(client);
        setLimitClient(limitClient);
        setTotalClient(totalClient);
        setPage(currentPage);
        setTotalPage(totalPage);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    await createClient(data.name, data.email, data.phone, data.address);
    fetchDataClient(keyword, page);
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(1);
    setKeyword(query);
  };

  return (
    <div className="p-5 grid gap-5">
      {/* Top Start */}
      <section className="grid grid-rows-1 grid-cols-1">
        <div className="flex justify-between items-center">
          <h1 className="text-night_60 font-medium">Client Summary</h1>
          <Button
            variant="primary"
            size="md"
            onClick={() => setOpenModalClient(true)}
            className="flex gap-1"
          >
            <AddUser colorStroke={"#FFFFFF"} /> New Client
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
              title={"Add Your Client"}
              subTitle={"Add client to this section"}
            />
          ) : (
            <>
              {/* Second Head Start */}
              <SearchTable
                placeholder="Enter client name"
                query={query}
                setQuery={setQuery}
                searchData={searchData}
              />
              {/* Second Head End */}

              {/* Second Table Start */}
              <div className="hidden overflow-x-auto mt-5 md:block">
                <TableClient dataClients={dataClients} />
              </div>
              {/* Second Table End */}

              {/* Table view up to the `md:` breakpoint Start  */}
              <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
                <TableClientMobile dataClients={dataClients} />
              </div>
              {/* Table view up to the `md:` breakpoint End  */}
            </>
          )}

          {/* Second Pagination Start */}
          <Pagination
            // handlePageChange={handlePageChange}
            limitClient={limitClient}
            totalClient={totalClient}
            page={page}
            totalPage={totalPage}
            setPage={setPage}
          />
          {/* Second Pagination End */}
        </Card>
      </section>
      {/* Second End */}

      <ModalAddClient
        openModalClient={openModalClient}
        setOpenModalClient={setOpenModalClient}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Client;
