import { useState } from "react";
import { Card } from "../components/Card/Card";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { ModalAddClient } from "../components/Modal/ModalAddClient";
import {
  SelectMenuItems,
  SelectMenuMonth,
  SelectMenuPages,
} from "../components/Select/SelectMenu";
import {
  HiOutlineUsers,
  HiOutlineReceiptRefund,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineFilter,
  HiOutlineCalendar,
} from "react-icons/hi";

const Client = () => {
  const [openModalClient, setOpenModalClient] = useState(false);

  const Datas = [
    {
      name: "Mr. 1",
      address: "Address 1",
      email: "mr1@email.com",
      phone: "+628928299412",
      status: "Active",
    },
    {
      name: "Mr. 2",
      address: "Address 2",
      email: "mr2@email.com",
      phone: "+628878367128",
      status: "In-Active",
    },
    {
      name: "Mr. 3",
      address: "Address 3",
      email: "mr3@email.com",
      phone: "+628092890173",
      status: "Active",
    },
    {
      name: "Mr. 4",
      address: "Address 4",
      email: "mr4@email.com",
      phone: "+628936459412",
      status: "Active",
    },
    {
      name: "Mr. 5",
      address: "Address 5",
      email: "mr5@email.com",
      phone: "+628809287128",
      status: "In-Active",
    },
    {
      name: "Mr. 6",
      address: "Address 6",
      email: "mr6@email.com",
      phone: "+628092891273",
      status: "Active",
    },
    {
      name: "Mr. 7",
      address: "Address 7",
      email: "mr7@email.com",
      phone: "+628128299472",
      status: "Active",
    },
    {
      name: "Mr. 8",
      address: "Address 8",
      email: "mr8@email.com",
      phone: "+628832367188",
      status: "In-Active",
    },
    {
      name: "Mr. 9",
      address: "Address 9",
      email: "mr9@email.com",
      phone: "+628142890179",
      status: "In-Active",
    },
    {
      name: "Mr. 10",
      address: "Address 10",
      email: "mr10@email.com",
      phone: "+628090387173",
      status: "In-Active",
    },
  ];

  const filterActive = Datas.filter((data) => data.status === "Active");
  const filterInActive = Datas.filter((data) => data.status === "In-Active");

  return (
    <div className="p-5 grid gap-5">
      {/* Top Start */}
      <div className="grid grid-rows-1 grid-cols-1">
        <div className="flex justify-between items-center">
          <h1 className="text-night_60 font-medium">Clients Summary</h1>
          <button
            onClick={() => setOpenModalClient(true)}
            className="bg-primary_100 text-white text-sm rounded-xl py-3 px-5"
          >
            + New CLient
          </button>
        </div>
      </div>
      {/* Top Start */}

      {/* Second Start */}
      <div className="grid gap-5 grid-rows-1 lg:grid-cols-2">
        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              <HiOutlineUsers size={20} color="#130F26" />
            </div>
            <SelectMenuMonth />
          </div>
          <div className="flex flex-row justify-between mt-7">
            <div>
              <h5 className="text-night_30">All Clients</h5>
              <p className="text-night_60 font-medium">{Datas.length}</p>
            </div>
            <div>
              <h5 className="text-night_30">Active</h5>
              <p className="text-night_60 font-medium">{filterActive.length}</p>
            </div>
            <div>
              <h5 className="text-night_30">In-Active</h5>
              <p className="text-night_60 font-medium">
                {filterInActive.length}
              </p>
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
          {/* Third Head Start */}
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-night_60">Clients</h2>
            <div className="flex flex-row gap-3">
              <input
                type="search"
                placeholder="Search"
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
            <table className="w-full">
              <thead className="border-b border-t border-[#E1E2E9]">
                <tr className="text-left text-sm text-night_90">
                  <th className="py-3">
                    <Checkbox />
                  </th>
                  <th className="font-normal px-6 py-3">Name</th>
                  <th className="font-normal px-6 py-3 hidden sm:table-cell">
                    Address
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Email
                  </th>
                  <th className="font-normal px-6 py-3 hidden lg:table-cell">
                    Phone
                  </th>
                  <th className="font-normal px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                {Datas.map((data, index) => (
                  <tr
                    key={index + 1}
                    className="text-night_40 text-left text-sm"
                  >
                    <td className="py-3">
                      <Checkbox />
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                      {data.name}

                      {/* Stack Table Start */}
                      <dl className="lg:hidden">
                        <dt className="sr-only">Phone</dt>
                        <dd className="text-night_20 text-xs mt-1 truncate">
                          {data.phone}
                        </dd>
                      </dl>
                      {/* Stack Table End */}
                    </td>
                    <td className="whitespace-nowrap  px-6 py-3 hidden sm:table-cell">
                      {data.address}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                      {data.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 hidden lg:table-cell">
                      {data.phone}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3">
                      <p
                        className={`px-5 py-1 rounded w-fit ${
                          data.status === "Active"
                            ? "bg-[#519c66]/20 text-action_go"
                            : "bg-[#cc5f5f]/20 text-action_stop"
                        }`}
                      >
                        {data.status}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Third Table End */}

          {/* Table view up to the `md:` breakpoint Start  */}
          <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
            {Datas.map((data, index) => (
              <div
                key={index + 1}
                className="p-3 border border-[#E1E2E9] rounded-lg"
              >
                <div className="flex justify-between">
                  <h1 className="font-medium text-night_40">{data.name}</h1>
                  <span
                    className={`px-3 text-xs py-1 rounded w-fit ${
                      data.status === "Active"
                        ? "bg-[#519c66]/20 text-action_go"
                        : "bg-[#cc5f5f]/20 text-action_stop"
                    }`}
                  >
                    {data.status}
                  </span>
                </div>
                <div className="text-night_20 text-xs">
                  <p className="text-night_30 text-sm mt-1">{data.address}</p>
                  <p className="mt-1">{data.email}</p>
                  <p className="mt-1">{data.phone}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Table view up to the `md:` breakpoint End  */}

          {/* Third Pagination Start */}
          <div className="flex justify-between gap-3 py-3">
            <div className="flex flex-row items-center gap-3">
              <SelectMenuItems />
              <p className="text-[#666666] text-sm">of {Datas.length} items</p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <HiChevronLeft size={25} color="#666666" />
              <SelectMenuPages />
              <p className="text-[#666666] text-sm">of 10 pages</p>
              <HiChevronRight size={25} color="#666666" />
            </div>
          </div>
          {/* Third Pagination End */}
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
