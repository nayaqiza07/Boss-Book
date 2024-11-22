import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { ModalAddClient } from "../components/Modal/ModalAddClient";
import {
  SelectMenuItems,
  SelectMenuMonth,
  SelectMenuPages,
} from "../components/Select/SelectMenu";
import {
  HiOutlineReceiptRefund,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineFilter,
  HiOutlineCalendar,
} from "react-icons/hi";

import { AddUser, User2 } from "../components/Icon/Icon";
import { DataEmpty } from "../components/Alert/DataEmpty";
import { BigUser2 } from "../assets/Icon/BigUser2";
import TableClient from "../components/Table/TableClient";
import TableClientMobile from "../components/Table/TableClientMobile";

const Client = () => {
  const [openModalClient, setOpenModalClient] = useState(false);
  const [search, setSearch] = useState("");
  const clients = useLoaderData();

  return (
    <div className="p-5 grid gap-5">
      {/* Top Start */}
      <div className="grid grid-rows-1 grid-cols-1">
        <div className="flex justify-between items-center">
          <h1 className="text-night_60 font-medium">Client Summary</h1>
          <button
            onClick={() => setOpenModalClient(true)}
            className="flex items-center bg-primary_100 text-white text-sm rounded-xl gap-3 py-3 px-5"
          >
            <AddUser colorStroke={"#FFFFFF"} /> New Client
          </button>
        </div>
      </div>
      {/* Top Start */}

      {/* Second Start */}
      <div className="grid gap-5 grid-rows-1 lg:grid-cols-2">
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
              <p className="text-night_60 font-medium">{clients.length}</p>
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
              <HiOutlineReceiptRefund size={20} color="#130F26" />
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
      </div>
      {/* Second End */}

      {/* Third Start */}
      <div className="grid grid-rows-1 grid-cols-1">
        <Card>
          {clients.length === 0 ? (
            <DataEmpty
              icon={<BigUser2 />}
              title={"Add Your Client"}
              subTitle={"Add client to this section"}
            />
          ) : (
            <>
              {/* Third Head Start */}
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-night_60">Clients</h2>
                <div className="flex flex-row gap-3">
                  <input
                    type="search"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded focus:outline-none w-20 lg:w-fit px-2 py-1"
                  />
                  <button className="flex items-center gap-2 border border-night_50 rounded px-2 py-1 text-night_50">
                    <HiOutlineFilter />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 border border-night_50 rounded px-2 py-1 text-night_50">
                    <HiOutlineCalendar />
                    Filter
                  </button>
                </div>
              </div>
              {/* Third Head End */}

              {/* Third Table Start */}
              <div className="hidden overflow-x-auto mt-5 md:block">
                <TableClient clients={clients} search={search} />
              </div>
              {/* Third Table End */}

              {/* Table view up to the `md:` breakpoint Start  */}
              <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
                <TableClientMobile clients={clients} />
              </div>
              {/* Table view up to the `md:` breakpoint End  */}

              {/* Third Pagination Start */}
              <div className="flex justify-between gap-3 py-3">
                <div className="flex flex-row items-center gap-3">
                  <SelectMenuItems />
                  <p className="text-[#666666] text-sm">
                    of {clients.length} items
                  </p>
                </div>

                <div className="flex flex-row items-center gap-3">
                  <HiChevronLeft size={25} color="#666666" />
                  <SelectMenuPages />
                  <p className="text-[#666666] text-sm">of 10 pages</p>
                  <HiChevronRight size={25} color="#666666" />
                </div>
              </div>
              {/* Third Pagination End */}
            </>
          )}
        </Card>
      </div>
      {/* Third End */}

      <ModalAddClient
        openModalClient={openModalClient}
        setOpenModalClient={setOpenModalClient}
      />
    </div>
  );
};

export default Client;
