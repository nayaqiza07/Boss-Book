import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { ModalAddOrder } from "../components/Modal/ModalAddOrder";
import {
  SelectMenuItems,
  SelectMenuMonth,
  SelectMenuPages,
} from "../components/Select/SelectMenu";
import { ModalInvoice } from "../components/Modal/ModalInvoice";
import { Bag } from "../components/Icon/Icon";
import TableOrder from "../components/Table/TableOrder";
import TableOrderMobile from "../components/Table/TableOrderMobile";
import { getOrders, createOrder } from "../api/orderApi";

// Icon
import { Add01Icon } from "hugeicons-react";
import { DataEmpty } from "../components/Alert/DataEmpty";
import { ShopBag } from "../assets/Icon/ShopBag";
import { toast } from "react-toastify";

const Order = () => {
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [openModalInvoice, setOpenModalInvoice] = useState(false);

  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);

  // Input Item Product
  const [addProduct, setAddProduct] = useState(false);
  const [inputItem, setInputItem] = useState({});

  useEffect(() => {
    fetchDataOrder();
  }, []);

  const fetchDataOrder = () => {
    getOrders().then((result) => {
      setOrders(result);
    });
  };

  // Handle Input Item Product on Modal
  const handleChangeItem = (e) => {
    setInputItem({
      ...inputItem,
      [e.target.name]: e.target.value,
    });
  };

  // Menyimpan input item product kedalam array saat addItem di klik on Modal
  const [items] = useState([]);
  const addItem = () => {
    items.push({
      name: inputItem.name,
      quantity: parseInt(inputItem.quantity),
      price: parseInt(inputItem.price),
      image: inputItem.image,
    });
    toast.success("Item berhasil ditambahkan");
    setAddProduct(false);
  };

  // Kirim Data Order ke dalam Database
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    createOrder(data.client, data.date, data.status, items);
    fetchDataOrder();
  };

  const handleModalInvoice = (id) => {
    setOpenModalInvoice(true);
    console.log(id);
  };

  const filterPending = orders.filter((order) => order.status === "Pending");
  const filterInProgress = orders.filter(
    (order) => order.status === "In-Progress"
  );
  const filterCompleted = orders.filter(
    (order) => order.status === "Completed"
  );

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
            <Add01Icon /> New Order
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
                {filterInProgress.length}
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
              {/* <HiOutlineExclamationCircle size={20} color="#130F26" /> */}
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
          {orders?.length === 0 ? (
            <DataEmpty
              icon={<ShopBag />}
              title={"Add Your Order"}
              subTitle={"Add Order to this section"}
            />
          ) : (
            <>
              {/* Third Head Start */}
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-night_60">Orders</h2>
                <div className="flex flex-row gap-3">
                  <input
                    type="search"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded focus:outline-none w-20 lg:w-fit px-2 py-1"
                  />
                  <button className="flex items-center gap-2 border border-night_50 rounded px-2 py-1 text-night_50">
                    {/* <HiOutlineFilter /> */}
                    Filter
                  </button>
                  <button className="flex items-center gap-2 border border-night_50 rounded px-2 py-1 text-night_50">
                    {/* <HiOutlineCalendar /> */}
                    Filter
                  </button>
                </div>
              </div>
              {/* Third Head End */}

              {/* Third Table Start */}
              <div className="hidden overflow-x-auto mt-5 md:block">
                <TableOrder
                  orders={orders}
                  search={search}
                  handleModalInvoice={handleModalInvoice}
                />
              </div>
              {/* Third Table End */}

              {/* Table view up to the `md:` breakpoint Start  */}
              <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
                <TableOrderMobile orders={orders} />
              </div>
              {/* Table view up to the `md:` breakpoint End  */}

              {/* Third Pagination Start */}
              <div className="flex justify-between gap-3 py-3">
                <div className="flex flex-row items-center gap-3">
                  <SelectMenuItems />
                  <p className="text-[#666666] text-sm">
                    of {orders.length} items
                  </p>
                </div>

                <div className="flex flex-row items-center gap-3">
                  {/* <HiChevronLeft size={25} color="#666666" /> */}
                  <SelectMenuPages />
                  <p className="text-[#666666] text-sm">of 10 pages</p>
                  {/* <HiChevronRight size={25} color="#666666" /> */}
                </div>
              </div>
              {/* Third Pagination End */}
            </>
          )}
        </Card>
      </div>
      {/* Third End */}

      {/* Modal Add Order Start */}
      <ModalAddOrder
        openModalOrder={openModalOrder}
        setOpenModalOrder={setOpenModalOrder}
        orders={orders}
        addProduct={addProduct}
        setAddProduct={setAddProduct}
        handleChangeItem={handleChangeItem}
        items={items}
        addItem={addItem}
        handleSubmit={handleSubmit}
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
