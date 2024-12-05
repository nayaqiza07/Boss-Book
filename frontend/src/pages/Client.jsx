import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { ModalAddClient } from "../components/Modal/ModalAddClient";
import { SelectMenuMonth } from "../components/Select/SelectMenu";

import { AddUser, User2 } from "../components/Icon/Icon";
import { DataEmpty } from "../components/Alert/DataEmpty";
import { BigUser2 } from "../assets/Icon/BigUser2";
import TableClient from "../components/Table/TableClient";
import TableClientMobile from "../components/Table/TableClientMobile";
import { getClients, createClient } from "../api/clientApi";
import Pagination from "../components/Pagination/Pagination";
import SearchTable from "../components/Search/SearchTable";

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
    fetchDataClient();
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
          <button
            onClick={() => setOpenModalClient(true)}
            className="flex items-center bg-primary_100 text-white text-sm rounded gap-1 leading-4 py-1 px-2"
          >
            <AddUser colorStroke={"#FFFFFF"} /> New Client
          </button>
        </div>
      </section>
      {/* Top Start */}

      {/* Second Start */}
      <section className="grid gap-5 grid-rows-1 lg:grid-cols-2">
        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              <User2 colorStroke={"#130F26"} />
            </div>
            <SelectMenuMonth />
          </div>
          <div className="flex flex-row justify-between mt-7">
            <div>
              <h5 className="text-night_30">All Clients</h5>
              <p className="text-night_60 font-medium">{totalClient}</p>
            </div>
            <div>
              <h5 className="text-night_30">Active</h5>
              <p className="text-night_60 font-medium">0</p>
            </div>
            <div>
              <h5 className="text-night_30">In-Active</h5>
              <p className="text-night_60 font-medium">0</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              {/* <HiOutlineReceiptRefund size={20} color="#130F26" /> */}
            </div>
            <SelectMenuMonth />
          </div>
          <div className="flex flex-row justify-between mt-7">
            <div>
              <h5 className="text-night_30">New Client</h5>
              <p className="text-night_60 font-medium">30</p>
            </div>
            <div>
              <h5 className="text-night_30">Purchasing</h5>
              <p className="text-night_60 font-medium">657</p>
            </div>
            <div>
              <h5 className="text-night_30">Cancel</h5>
              <p className="text-night_60 font-medium">5</p>
            </div>
          </div>
        </Card>
      </section>
      {/* Second End */}

      {/* Third Start */}
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
              {/* Third Head Start */}
              <SearchTable
                title="Clients"
                query={query}
                setQuery={setQuery}
                searchData={searchData}
              />
              {/* Third Head End */}

              {/* Third Table Start */}
              <div className="hidden overflow-x-auto mt-5 md:block">
                <TableClient dataClients={dataClients} />
              </div>
              {/* Third Table End */}

              {/* Table view up to the `md:` breakpoint Start  */}
              <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
                <TableClientMobile dataClients={dataClients} />
              </div>
              {/* Table view up to the `md:` breakpoint End  */}
            </>
          )}

          {/* Third Pagination Start */}
          <Pagination
            // handlePageChange={handlePageChange}
            limitClient={limitClient}
            totalClient={totalClient}
            page={page}
            totalPage={totalPage}
            setPage={setPage}
          />
          {/* Third Pagination End */}
        </Card>
      </section>
      {/* Third End */}

      <ModalAddClient
        openModalClient={openModalClient}
        setOpenModalClient={setOpenModalClient}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Client;
