import { useEffect, useState } from "react";
import { Modal } from ".";
import { ShopBag } from "@/assets/Icon/ShopBag";
import { ButtonModal } from "@components/Atoms/Button/ButtonModal";
import { HeaderModal } from "@components/Molecules/Header/HeaderModal";
import { DataEmpty } from "@components/Molecules/404/DataEmpty";
import FormInput from "@components/Atoms/Form/FormInput";
import FormSelect from "@components/Atoms/Form/FormSelect";

import { getAllClients } from "../../../api/clientApi";
import { priceFormat } from "../../utils";

import { Add01Icon, ArrowLeft01Icon } from "hugeicons-react";
import Uploader from "../../Molecules/Uploader/Uploader";
import FormTextarea from "@/components/Atoms/Form/FormTextarea";
import Label from "@/components/Atoms/Input/Label";

export const ModalAddOrder = ({
  openModalOrder,
  setOpenModalOrder,
  orders,
  addProduct,
  setAddProduct,
  handleChangeItem,
  items,
  totalPriceItem,
  addItem,
  handleSubmit,
}) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchDataClient();
  }, []);

  // Fetch data client untuk form select
  const fetchDataClient = () => {
    getAllClients().then(({ resClient }) => {
      setClients(resClient);
    });
  };

  // Ambil Data Order terakhir
  const lastOrder = orders[orders.length - 1];
  // Ambil orderNumber dari data order terakhir
  let lastOrderNumber = lastOrder ? lastOrder.orderNumber : "GRG00000";

  // Memisahkan String dan Number
  const regex = /(\D+)(\d+)/;
  const matches = lastOrderNumber?.match(regex);
  const prefix = matches?.[1];
  const numberPart = parseInt(matches?.[2]);

  // Menambahkan +1 pada bagian angka
  const newNumber = numberPart + 1;

  // // Menggabungkan kembali String dan Number
  const newString = prefix + newNumber.toString().padStart(5, "0");
  lastOrderNumber = newString;

  // Date
  const showDate = new Date();
  const todayDate =
    ("0" + showDate.getDate()).slice(-2) +
    "/" +
    ("0" + (showDate.getMonth() + 1)).slice(-2) +
    "/" +
    showDate.getFullYear();

  // List Status
  const list = [
    { _id: "Pending", name: "Pending" },
    { _id: "In-Progress", name: "In-Progress" },
    { _id: "Completed", name: "Completed" },
  ];

  return (
    <Modal
      openModal={openModalOrder}
      onCloseModal={() => setOpenModalOrder(false)}
    >
      <div className="max-w-72 lg:max-w-[860px]">
        {/* Header Start */}
        <HeaderModal
          setOpenModal={setOpenModalOrder}
          title={"Create New Order"}
        />
        {/* Header End */}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Content Start */}
          <div className="max-h-96 overflow-y-auto mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:max-h-fit">
            {/* Left Content Start */}
            <div>
              <div className="flex justify-between">
                <h5 className="font-medium text-night_30">Order Detail</h5>
                <h5 className="font-medium text-primary_100">
                  #{lastOrderNumber}
                </h5>
              </div>

              <div className="mt-7">
                <div>
                  <FormSelect
                    list={clients}
                    name="client"
                    placeholder="Select Client"
                  />
                  <FormInput
                    // icon={<HiOutlineCalendar size={25} color="#ABAFB1" />}
                    type="text"
                    name="date"
                    defaultValue={todayDate}
                    readonly={true}
                  />
                  <Label size="default">
                    <span className="text-xs text-[#b9c0c4]">Order Status</span>
                    <FormSelect
                      list={list}
                      name="status"
                      placeholder="Select Status"
                    />
                  </Label>

                  <FormInput
                    // icon={<HiOutlineCalendar size={25} color="#ABAFB1" />}
                    type="number"
                    name="total"
                    placeholder="Total"
                    readonly={true}
                    value={totalPriceItem}
                  />
                  <FormInput
                    // icon={<HiOutlineCalendar size={25} color="#ABAFB1" />}
                    type="number"
                    name="jumlahDiterima"
                    placeholder="Jumlah Diterima"
                  />
                </div>
              </div>
            </div>
            {/* Left Content Start */}

            {/* Right Content Start */}
            <div>
              <div className="flex justify-between">
                <h5 className="font-medium text-night_30">Items Order</h5>
                <span
                  onClick={() => setAddProduct(!addProduct)}
                  className="font-medium text-primary_100 hover:cursor-pointer"
                >
                  +Add Products
                </span>
              </div>

              <div className="mt-7 flex flex-col">
                {addProduct ? (
                  <>
                    <FormInput
                      icon={false}
                      type="text"
                      name="name"
                      placeholder="Item"
                      onChange={handleChangeItem}
                    />
                    <FormTextarea
                      icon={false}
                      type="text"
                      name="note"
                      placeholder="Keterangan"
                      onChange={handleChangeItem}
                    />

                    <div className="flex gap-7">
                      <FormInput
                        icon={false}
                        type="number"
                        name="quantity"
                        placeholder="Qty"
                        onChange={handleChangeItem}
                      />
                      <FormInput
                        icon={false}
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={handleChangeItem}
                      />
                    </div>

                    {/* <FormInput
                      icon={false}
                      type="file"
                      name="image"
                      onChange={handleChangeItem}
                    /> */}

                    <div className="flex justify-between">
                      <span
                        onClick={() => setAddProduct(false)}
                        className="flex items-center gap-1 text-lg text-primary_100 transition-all hover:ml-3 hover:cursor-pointer"
                      >
                        <ArrowLeft01Icon />
                        Back
                      </span>
                      <span
                        onClick={addItem}
                        className="flex items-center gap-1 text-lg text-primary_100 transition-all hover:mr-3 hover:cursor-pointer"
                      >
                        <Add01Icon />
                        Add
                      </span>
                    </div>
                  </>
                ) : items.length === 0 ? (
                  <DataEmpty
                    setOpen={setAddProduct}
                    icon={<ShopBag />}
                    title={"Add Products To Your Order"}
                    subTitle={"Add product items to this order"}
                  />
                ) : (
                  <div className="max-h-96 overflow-y-auto flex flex-col gap-3">
                    {items?.map((item, index) => (
                      <div
                        key={index}
                        className="py-1 px-2 text-left text-sm text-primary_100 border rounded-lg"
                      >
                        <p>Nama : {item.name}</p>
                        <p>
                          Keterangan :{" "}
                          {item.note.split("\n").map((row, index) => (
                            <p key={index}>{row}</p>
                          ))}
                        </p>
                        <p>Qty : {item.quantity}</p>
                        <p>Price: {priceFormat(item.price)}</p>
                        <p>
                          Total Price: {priceFormat(item.quantity * item.price)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Right Content End */}

            {/* Uploader Start */}
            <div>
              <Uploader />
              {/* <input type="file" name="image" /> */}
            </div>
            {/* Uploader End */}
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
