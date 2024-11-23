import { useEffect, useState } from "react";
import {
  HiOutlineCalendar,
  HiOutlineChevronLeft,
  // HiOutlinePlus,
} from "react-icons/hi";
import { Modal } from ".";
import { ButtonModal } from "../Button/ButtonModal";
import { HeaderModal } from "../Header/HeaderModal";
import { DataEmpty } from "../Alert/DataEmpty";
import { ShopBag } from "../../assets/Icon/ShopBag";
import FormInput from "../Form/FormInput";
import FormSelect from "../Form/FormSelect";

import { getClients } from "../../api/clientApi";
import { createOrder } from "../../api/orderApi";

export const ModalAddOrder = ({ openModalOrder, setOpenModalOrder }) => {
  const [addProduct, setAddProduct] = useState(false);
  const [clients, setClients] = useState([]);
  const [lastOrderNumber, setLastOrderNumber] = useState(0);

  const list = [
    { _id: "Pending" },
    { _id: "In-Progress" },
    { _id: "Completed" },
  ];

  // Generate Order Number
  const generateOrderNumber = () => {
    // Increment dan buat Nomor Order baru
    const prefix = "GRG";
    const newNumber = lastOrderNumber + 1;
    const paddedNumber = newNumber.toString().padStart(5, "0");
    const orderNumber = prefix + paddedNumber;
    setLastOrderNumber(newNumber);
    return orderNumber;
  };

  // Date
  const showDate = new Date();
  const todayDate =
    ("0" + showDate.getDate()).slice(-2) +
    "/" +
    ("0" + (showDate.getMonth() + 1)).slice(-2) +
    "/" +
    showDate.getFullYear();

  useEffect(() => {
    getClients().then((result) => {
      setClients(result);
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    console.log(data);

    const newOrderNumber = generateOrderNumber();

    const items = [
      {
        name: data.name,
        quantity: data.quantity,
        price: data.price,
      },
    ];

    createOrder(newOrderNumber, data.client, data.date, data.status, items);
  };

  return (
    <Modal
      openModal={openModalOrder}
      onCloseModal={() => setOpenModalOrder(false)}
    >
      <div className="max-w-72 lg:max-w-[850px]">
        {/* Header Start */}
        <HeaderModal
          setOpenModal={setOpenModalOrder}
          title={"Create New Order"}
        />
        {/* Header End */}

        <form onSubmit={handleSubmit}>
          {/* Content Start */}
          <div className="max-h-96 overflow-y-auto mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:max-h-fit">
            {/* Left Content Start */}
            <div>
              <div className="flex justify-between">
                <h5 className="font-medium text-night_30">Order Detail</h5>
                <h5 className="font-medium text-primary_100">#Order Num</h5>
              </div>

              <div className="mt-7">
                <div>
                  <FormSelect
                    list={clients}
                    name="client"
                    placeholder="Select Client"
                  />
                  <FormInput
                    icon={<HiOutlineCalendar size={25} color="#ABAFB1" />}
                    type="text"
                    name="date"
                    defaultValue={todayDate}
                    readonly={true}
                  />
                  <FormSelect
                    list={list}
                    name="status"
                    placeholder="Select Status"
                  />
                </div>
              </div>
            </div>
            {/* Left Content Start */}

            {/* Right Content Start */}
            <div>
              <div>
                <h5 className="font-medium text-night_30">Items Order</h5>
              </div>

              <div className="mt-7 flex flex-col">
                {addProduct ? (
                  <>
                    <FormInput
                      icon={false}
                      type="text"
                      name="name"
                      placeholder="Item"
                    />

                    <div className="flex gap-7">
                      <FormInput
                        icon={false}
                        type="number"
                        name="quantity"
                        placeholder="Qty"
                      />
                      <FormInput
                        icon={false}
                        type="number"
                        name="price"
                        placeholder="Price"
                      />
                    </div>

                    <div className="flex justify-between mt-7">
                      <button
                        onClick={() => setAddProduct(false)}
                        className="flex items-center gap-1 text-lg text-primary_100 transition-all hover:ml-3"
                      >
                        <HiOutlineChevronLeft />
                        Back
                      </button>
                      {/* <button className="flex items-center gap-1 text-lg text-primary_100 transition-all hover:mr-3">
                        <HiOutlinePlus />
                        Add
                      </button> */}
                    </div>
                  </>
                ) : (
                  <DataEmpty
                    setOpen={setAddProduct}
                    icon={<ShopBag />}
                    title={"Add Products To Your Order"}
                    subTitle={"Add product items to this order"}
                  />
                )}
              </div>
            </div>
            {/* Right Content End */}
          </div>
          {/* Content End */}

          {/* Footer Start */}
          <ButtonModal
            setOpenModal={setOpenModalOrder}
            text={<span>Create Order</span>}
          />
          {/* Footer End */}
        </form>
      </div>
    </Modal>
  );
};
