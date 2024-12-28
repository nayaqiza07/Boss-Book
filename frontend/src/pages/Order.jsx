import { useCallback, useEffect, useState } from "react";
import { Card } from "@components/Organisms/Card/Card";
import { ModalAddOrder } from "@components/Organisms/Modal/ModalAddOrder";
import { SelectMenuMonth } from "@components/Atoms/Select/SelectMenu";
import { ModalInvoice } from "@components/Organisms/Modal/ModalInvoice";
import ModalUpdateOrder from "@components/Organisms/Modal/ModalUpdateOrder";
import { Bag } from "@components/Icon/Icon";
import TableOrder from "@components/Organisms/Table/TableOrder";
import TableOrderMobile from "@components/Organisms/Table/TableOrderMobile";

// API
import {
  getOrders,
  createOrder,
  getOrderById,
  updateOrder,
} from "@/api/orderApi";

// Icon
import { Add01Icon } from "hugeicons-react";
import { DataEmpty } from "@components/Molecules/404/DataEmpty";
import { ShopBag } from "@/assets/Icon/ShopBag";
import { toast } from "react-toastify";
import SearchTable from "@components/Molecules/Search/SearchTable";
import Pagination from "@components/Molecules/Pagination/Pagination";
import Button from "@components/Atoms/Button/Button";

// Redux Action
import {
  setLimitData,
  setTotalData,
  setPage,
  setTotalPage,
  setKeyword,
  setQuery,
} from "@/redux/slices/paginationSlice";
import { useDispatch, useSelector } from "react-redux";

const Order = () => {
  const { limitData, totalData, page, totalPage, keyword, query } = useSelector(
    (state) => state.paginationState
  );
  const dispatch = useDispatch();

  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [openModalInvoice, setOpenModalInvoice] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [orders, setOrders] = useState([]);
  const [dataOrderById, setDataOrderById] = useState("");

  // Input Item Product
  const [addProduct, setAddProduct] = useState(false);
  const [inputItem, setInputItem] = useState({});

  const fetchDataOrder = useCallback(
    (keyword, page) => {
      getOrders(keyword, page).then(
        ({ res, limitOrder, totalDataOrder, currentPage, totalPage }) => {
          setOrders(res);

          dispatch(setLimitData(limitOrder));
          dispatch(setTotalData(totalDataOrder));
          dispatch(setPage(currentPage));
          dispatch(setTotalPage(totalPage));
        }
      );
    },
    [dispatch]
  );

  useEffect(() => {
    fetchDataOrder(keyword, page);
  }, [keyword, page, fetchDataOrder]);

  const filterPending = orders.filter((order) => order.status === "Pending");
  const filterInProgress = orders.filter(
    (order) => order.status === "In-Progress"
  );
  const filterCompleted = orders.filter(
    (order) => order.status === "Completed"
  );

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
  const [totalPriceItem, setTotalPriceItem] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const [items] = useState([]);
  const addItem = () => {
    items.push({
      name: inputItem.name,
      note: inputItem.note,
      quantity: parseInt(inputItem.quantity),
      price: parseInt(inputItem.price),
      // image: inputItem.image,
    });

    let total = 0;
    for (const item of items) {
      const totalPerItem = item.quantity * item.price;
      total += totalPerItem;
      setTotalPriceItem(total);
    }

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
    // console.log(selectedImages);
    // console.log(data.image);

    // const formData = new FormData();
    // for (let i = 0; i < selectedImages.length; i++) {
    //   formData.append("image", selectedImages[i]);
    // }
    // console.log(formData);

    const jatuhTempo = data.jatuhTempo
      ? data.jatuhTempo.split("-").reverse().join("/")
      : null;

    await createOrder(
      data.client,
      data.date,
      data.status,
      items,
      data.image,
      data.total,
      data.jumlahPembayaran,
      jatuhTempo
    );

    fetchDataOrder(keyword, page);
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

  const searchData = (e) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(setKeyword(query));
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
      <div className="grid gap-5 grid-rows-1">
        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              <Bag colorStroke={"#130F26"} />
            </div>
            <SelectMenuMonth />
          </div>

          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <div>
              <h5 className="text-black">All Orders</h5>
              <p className="text-night_60 font-medium">{orders.length}</p>
            </div>
            <div>
              <h5 className="text-black">Pending</h5>
              <p className="text-night_60 font-medium">
                {filterPending.length}
              </p>
            </div>
            <div>
              <h5 className="text-black">In-Progress</h5>
              <p className="text-night_60 font-medium">
                {filterInProgress.length}
              </p>
            </div>
            <div>
              <h5 className="text-black">Completed</h5>
              <p className="text-night_60 font-medium">
                {filterCompleted.length}
              </p>
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
                placeholder="Enter Name"
                query={query}
                setQuery={setQuery}
                searchData={searchData}
              />
              {/* Third Head End */}

              {/* Third Table Start */}
              <div className="hidden overflow-x-auto mt-5 md:block">
                <TableOrder
                  orders={orders}
                  handleModalInvoice={handleModalInvoice}
                  handleModalUpdateOrder={handleModalUpdateOrder}
                />
              </div>
              {/* Third Table End */}

              {/* Table view up to the `md:` breakpoint Start  */}
              <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
                <TableOrderMobile
                  orders={orders}
                  handleModalInvoice={handleModalInvoice}
                  handleModalUpdateOrder={handleModalUpdateOrder}
                />
              </div>
              {/* Table view up to the `md:` breakpoint End  */}

              {/* Third Pagination Start */}
              <Pagination
                limitData={limitData}
                totalData={totalData}
                page={page}
                totalPage={totalPage}
                setPage={setPage}
              />
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
        totalPriceItem={totalPriceItem}
        addItem={addItem}
        handleSubmit={handleSubmit}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
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
