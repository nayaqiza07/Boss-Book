import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { ModalAddOrder } from "../components/Modal/ModalAddOrder";
import { SelectMenuMonth } from "../components/Select/SelectMenu";
import { ModalInvoice } from "../components/Modal/ModalInvoice";
import ModalUpdateOrder from "../components/Modal/ModalUpdateOrder";
import { Bag } from "../components/Icon/Icon";
import TableOrder from "../components/Table/TableOrder";
import TableOrderMobile from "../components/Table/TableOrderMobile";
import {
  getOrders,
  createOrder,
  getOrderById,
  updateOrder,
} from "../api/orderApi";

// Icon
import { Add01Icon } from "hugeicons-react";
import { DataEmpty } from "../components/Alert/DataEmpty";
import { ShopBag } from "../assets/Icon/ShopBag";
import { toast } from "react-toastify";
import SearchTable from "../components/Search/SearchTable";
import Pagination from "../components/Pagination/Pagination";
import Button from "../components/Button/Button";

const Order = () => {
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [openModalInvoice, setOpenModalInvoice] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [dataOrderById, setDataOrderById] = useState("");

  // Input Item Product
  const [addProduct, setAddProduct] = useState(false);
  const [inputItem, setInputItem] = useState({});

  useEffect(() => {
    fetchDataOrder();
  }, []);

  const filterPending = orders.filter((order) => order.status === "Pending");
  const filterInProgress = orders.filter(
    (order) => order.status === "In-Progress"
  );
  const filterCompleted = orders.filter(
    (order) => order.status === "Completed"
  );

  const fetchDataOrder = () => {
    getOrders().then((result) => {
      setOrders(result);
    });
  };

  const fetchDataOrderById = (id) => {
    getOrderById(id).then((result) => {
      setDataOrderById(result);
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
      // image: inputItem.image,
    });
    toast.success("Item berhasil ditambahkan");
    setAddProduct(false);
    // console.log(items);
  };

  // Create Data Order ke dalam Database
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    await createOrder(data.client, data.date, data.status, items, data.image);
    fetchDataOrder();
  };

  const handleModalInvoice = (id) => {
    setOpenModalInvoice(true);
    // console.log(id);
    fetchDataOrderById(id);
  };

  const handleModalUpdateOrder = (id) => {
    setOpenModalUpdate(true);
    // console.log(id);
    fetchDataOrderById(id);
  };

  // Update Data Order
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    await updateOrder(dataOrderById._id, data.status);
    // console.log(dataOrderById._id, data.status);
    setOpenModalUpdate(false);
    fetchDataOrder();
  };

  return (
    <div className="p-5 grid gap-5">
      {/* Top Start */}
      <div className="grid grid-rows-1 grid-cols-1">
        <div className="flex justify-between items-center">
          <h1 className="text-night_60 font-medium">Order Summary</h1>
          <Button
            variant="primary"
            size="md"
            onClick={() => setOpenModalOrder(true)}
            className="flex gap-1"
          >
            <Add01Icon /> New Order
          </Button>
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
              <SearchTable
                placeholder="Enter order number"
                search={search}
                setSearch={setSearch}
              />
              {/* Third Head End */}

              {/* Third Table Start */}
              <div className="hidden overflow-x-auto mt-5 md:block">
                <TableOrder
                  orders={orders}
                  search={search}
                  handleModalInvoice={handleModalInvoice}
                  handleModalUpdateOrder={handleModalUpdateOrder}
                />
              </div>
              {/* Third Table End */}

              {/* Table view up to the `md:` breakpoint Start  */}
              <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
                <TableOrderMobile
                  orders={orders}
                  search={search}
                  handleModalInvoice={handleModalInvoice}
                  handleModalUpdateOrder={handleModalUpdateOrder}
                />
              </div>
              {/* Table view up to the `md:` breakpoint End  */}

              {/* Third Pagination Start */}
              <Pagination />
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
        dataOrderById={dataOrderById}
      />
      {/* Modal Invoice End */}

      {/* Modal Update Order Start */}
      <ModalUpdateOrder
        openModalUpdate={openModalUpdate}
        setOpenModalUpdate={setOpenModalUpdate}
        dataOrderById={dataOrderById}
        handleUpdate={handleUpdate}
      />
      {/* Modal Update Order End */}
    </div>
  );
};

export default Order;
