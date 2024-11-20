import { useState } from "react";
import { Card } from "../components/Card/Card";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { ModalAddOrder } from "../components/Modal/ModalAddOrder";
import {
  SelectMenuItems,
  SelectMenuMonth,
  SelectMenuPages,
  SelectMenuActions,
} from "../components/Select/SelectMenu";
import {
  HiOutlineExclamationCircle,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineFilter,
  HiOutlineCalendar,
  HiOutlinePlus,
} from "react-icons/hi";
import { ModalInvoice } from "../components/Modal/ModalInvoice";
import { Bag } from "../components/Icon/Icon";

const Order = () => {
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [openModalInvoice, setOpenModalInvoice] = useState(false);

  const [orders, setOrders] = useState([]);
  const [orderNumber, setOrderNumber] = useState("");

  // useEffect(() => {
  //   handleDataOrder();
  // });

  // const handleDataOrder = () => {
  //   getOrders().then((result) => {
  //     setOrders(result);
  //   });
  // };

  // const handleModalInvoice = (id) => {
  //   setOpenModalInvoice(true);
  //   // console.log(id);
  //   setOrderNumber(id);
  // };

  const filterCompleted = orders.filter((data) => data.status === "Completed");
  const filterPending = orders.filter((data) => data.status === "Pending");
  const filterProgress = orders.filter((data) => data.status === "In-Progress");

  return (
    <div className="p-5 grid gap-5">
      {/* Top Start */}
      <div className="grid grid-rows-1 grid-cols-1">
        <div className="flex justify-between items-center">
          <h1 className="text-night_60 font-medium">Order Summary</h1>
          <button
            onClick={() => setOpenModalOrder(true)}
            className="flex items-center bg-primary_100 text-white text-sm rounded-xl gap-3 py-3 px-5 transition-all hover:scale-105"
          >
            <HiOutlinePlus size={20} /> New Order
          </button>
        </div>
      </div>
      {/* Top Start */}

      {/* Second Start */}
      <div className="grid gap-5 grid-rows-1 lg:grid-cols-2">
        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              <Bag colorStroke={"#130F26"} />
            </div>
            <SelectMenuMonth />
          </div>

          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <div>
              <h5 className="text-night_30">All Orders</h5>
              <p className="text-night_60 font-medium">{orders.length}</p>
            </div>
            <div>
              <h5 className="text-night_30">Pending</h5>
              <p className="text-night_60 font-medium">
                {filterPending.length}
              </p>
            </div>
            <div>
              <h5 className="text-night_30">In-Progress</h5>
              <p className="text-night_60 font-medium">
                {filterProgress.length}
              </p>
            </div>
            <div>
              <h5 className="text-night_30">Completed</h5>
              <p className="text-night_60 font-medium">
                {filterCompleted.length}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              <HiOutlineExclamationCircle size={20} color="#130F26" />
            </div>
            <SelectMenuMonth />
          </div>
          <div className="flex flex-row justify-between mt-7">
            <div>
              <h5 className="text-night_30">Canceled</h5>
              <p className="text-night_60 font-medium">30</p>
            </div>
            <div>
              <h5 className="text-night_30">Returned</h5>
              <p className="text-night_60 font-medium">657</p>
            </div>
            <div>
              <h5 className="text-night_30">Damaged</h5>
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
            <h2 className="text-night_60">Orders</h2>
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
                  <th className="font-normal px-6 py-3">Order Number</th>
                  <th className="font-normal px-6 py-3 hidden xl:table-cell">
                    Client Name
                  </th>
                  <th className="font-normal px-6 py-3 hidden sm:table-cell">
                    Address
                  </th>
                  <th className="font-normal px-6 py-3 hidden xl:table-cell">
                    Date
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Total
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Action
                  </th>
                  <th className="font-normal px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="text-night_40 text-left text-sm"
                  >
                    <td className="py-3">
                      <Checkbox />
                    </td>

                    <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                      <span
                        onClick={() => handleModalInvoice(order.orderNumber)}
                        className="cursor-pointer "
                      >
                        {order.orderNumber}
                      </span>
                      {/* Stack Table Start */}
                      <dl className="xl:hidden">
                        <dt className="sr-only">Client Name</dt>
                        <dd className="text-night_20 text-xs mt-1 truncate">
                          {order.clientId}
                        </dd>
                        <dt className="sr-only">Date</dt>
                        <dd className="text-night_20 text-xs mt-1 truncate">
                          {order.date}
                        </dd>
                      </dl>
                      {/* Stack Table End */}
                    </td>
                    <td className="whitespace-nowrap  px-6 py-3 hidden xl:table-cell">
                      {order.clientId}
                    </td>
                    <td className="whitespace-nowrap  px-6 py-3 hidden md:table-cell">
                      {order.address}
                    </td>
                    <td className="whitespace-nowrap  px-6 py-3 hidden xl:table-cell">
                      {order.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                      {order.total}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                      <SelectMenuActions />
                    </td>
                    <td className="whitespace-nowrap px-6 py-3">
                      <p
                        className={`px-5 py-1 rounded w-fit ${
                          order.status === "Completed"
                            ? "bg-[#519c66]/20 text-action_go"
                            : order.status === "In-Progress"
                            ? "bg-[#5570F1]/20 text-primary_100"
                            : "bg-[#cc5f5f]/20 text-action_stop"
                        }`}
                      >
                        {order.status}
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
            {orders.map((order, index) => (
              <div
                key={index + 1}
                className="p-3 border border-[#E1E2E9] rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h1 className="font-medium text-night_40">
                      {order.clientId}
                    </h1>
                    <span
                      className={`px-3 text-xs py-1 rounded w-fit ml-3 ${
                        order.status === "Completed"
                          ? "bg-[#519c66]/20 text-action_go"
                          : order.status === "In-Progress"
                          ? "bg-[#5570F1]/20 text-primary_100"
                          : "bg-[#cc5f5f]/20 text-action_stop"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <span>
                    <SelectMenuActions />
                  </span>
                </div>
                <div className="text-night_20 text-xs">
                  <p
                    onClick={() => setOpenModalInvoice(true)}
                    className="text-primary_100 text-sm mt-1"
                  >
                    {order.no}
                  </p>
                  <p className="text-night_30 text-sm mt-1">{order.address}</p>
                  <p className="mt-1">{order.date}</p>
                  <p className="mt-1">{order.total}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Table view up to the `md:` breakpoint End  */}

          {/* Third Pagination Start */}
          <div className="flex justify-between gap-3 py-3">
            <div className="flex flex-row items-center gap-3">
              <SelectMenuItems />
              <p className="text-[#666666] text-sm">of {orders.length} items</p>
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

      {/* Modal Add Order Start */}
      <ModalAddOrder
        openModalOrder={openModalOrder}
        setOpenModalOrder={setOpenModalOrder}
      />
      {/* Modal Add Order End */}

      {/* Modal Invoice Start */}
      <ModalInvoice
        openModalInvoice={openModalInvoice}
        setOpenModalInvoice={setOpenModalInvoice}
      />
      {/* Modal Invoice End */}
    </div>
  );
};

export default Order;
