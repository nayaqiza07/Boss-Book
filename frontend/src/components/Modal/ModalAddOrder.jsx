import { useState } from "react";
import {
  HiOutlineCalendar,
  HiOutlineChevronLeft,
  HiOutlinePlus,
} from "react-icons/hi";
import { Modal } from ".";
import { SelectClient } from "../Select/SelectClient";
import { SelectStatus } from "../Select/SelectStatus";
import { ButtonModal } from "../Button/ButtonModal";
import { HeaderModal } from "../Header/HeaderModal";
import { DataEmpty } from "../Alert/DataEmpty";
import { ShopBag } from "../../assets/Icon/ShopBag";

export const ModalAddOrder = ({ openModalOrder, setOpenModalOrder }) => {
  const [addProduct, setAddProduct] = useState(false);
  const showDate = new Date();
  const todayDate =
    ("0" + showDate.getDate()).slice(-2) +
    "/" +
    ("0" + (showDate.getMonth() + 1)).slice(-2) +
    "/" +
    showDate.getFullYear();

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
                <SelectClient />
                <div className="flex items-center px-4 gap-3 mt-7 rounded-lg bg-[#EFF1F9]/60">
                  <HiOutlineCalendar size={25} color="#ABAFB1" />
                  <input
                    type="text"
                    value={todayDate}
                    readOnly={true}
                    className="w-full py-[16.5px] focus:outline-none bg-[#EFF1F9]/60 text-[#ABAFB1]  transition-colors"
                  />
                </div>
                <SelectStatus />
                <textarea
                  type="textarea"
                  placeholder="Note"
                  rows={3}
                  className="w-full mt-6 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
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
                  <input
                    type="text"
                    placeholder="Item"
                    className="w-72 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
                  />
                  <div className="flex gap-7 mt-7 w-72">
                    <input
                      type="text"
                      placeholder="Qty"
                      className="w-1/4 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Price"
                      className="w-full px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
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
                    <button className="flex items-center gap-1 text-lg text-primary_100 transition-all hover:mr-3">
                      <HiOutlinePlus />
                      Add
                    </button>
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
      </div>
    </Modal>
  );
};
