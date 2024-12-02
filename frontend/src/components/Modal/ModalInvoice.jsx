import { Modal } from ".";
import { priceFormat } from "../utils";

export const ModalInvoice = ({
  openModalInvoice,
  setOpenModalInvoice,
  dataOrderById,
}) => {
  return (
    <Modal
      openModal={openModalInvoice}
      onCloseModal={() => setOpenModalInvoice(false)}
    >
      <div className="flex flex-col max-w-72 lg:max-w-[850px] lg:h-[800px]">
        {/* Head Modal Invoice Start */}
        <h2 className="text-primary_100">#{dataOrderById.orderNumber}</h2>
        {/* Head Modal Invoice End */}

        {/* Content Modal Invoice Start */}
        <div className="p-4 mt-7 grid grid-cols-2 flex-1 border rounded-lg text-[6px] lg:text-xs ">
          {/* Section 1 Start */}
          <div className="text-right col-span-2">
            <h6 className="font-bold">GEORGE FURNITURE</h6>
            <p>
              JL.Bangsri - Mlonggo Rt/39 Rw 08 Jambu - Mlonggo <br />
              Jepara Jawa tengah 59452
            </p>
            <p>081779068604</p>
          </div>
          {/* Section 1 End */}

          {/* Section 2 Start */}
          <div className="flex justify-between mt-7 col-span-2">
            <div>
              <h6>Invoice for</h6>
              <p>{dataOrderById.client?.name}</p>
              <p>{dataOrderById.client?.address}</p>
              <p>{dataOrderById.client?.phone}</p>
            </div>

            <div>
              <p className="flex justify-between">
                Invoice Number:
                <span className="ml-3 text-primary_100">
                  #{dataOrderById.orderNumber}
                </span>
              </p>
              <p className="flex justify-between">
                Invoice Date: <span className="ml-3">{dataOrderById.date}</span>
              </p>
            </div>
          </div>
          {/* Section 2 End */}

          {/* Section 3 Start */}
          <div className="mt-7 border rounded-lg p-3 col-span-2">
            <table className="w-full h-full">
              <thead>
                <tr>
                  <th className="text-left">Item</th>
                  <th className="text-center">Qty</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {dataOrderById.items?.map((item) => (
                  <tr key={item._id}>
                    <td className="text-left">{item.name}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-right">{priceFormat(item.price)}</td>
                    <td className="text-right">
                      {priceFormat(item.totalPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Section 3 End */}

          {/* Section 4 Start */}
          <div className="mt-7 col-span-2">
            <h6>Payment</h6>

            <div className="flex justify-between">
              <div>
                <p>BNI an. Muhammad Hafidz Syaifullah Ali 1327844630</p>
                <p>BCA an. Muhammad Hafidz Syaifullah Ali 8715249525</p>
              </div>

              <div className="text-right mr-3">
                <p>
                  Sub Total:
                  <span className="ml-3">
                    {priceFormat(dataOrderById.total)}
                  </span>
                </p>
                <p>
                  Total:
                  <span className="ml-3">
                    {priceFormat(dataOrderById.total)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Section 4 End */}

          {/* Section 5 Start */}
          <div className="col-span-2 mt-10">
            <p>- Dp 50% proses produksi akan di update per minggunya.</p>
            <p>
              - setelah barang jadi customer akan dikirim foto produk dan bil
              dari ekspedisi dan melakukan pelunasan sisa pembayaran.
            </p>
          </div>
        </div>
        {/* Section 5 End */}
        {/* Content Modal Invoice End */}

        {/* Footer Modal Invoice Start */}
        <div className="flex justify-between content-end mt-5 border">
          <button className="flex items-center text-primary_100 gap-3">
            {/* <HiOutlineDownload size={20} /> */}
            Download Invoice
          </button>

          <button
            onClick={() => setOpenModalInvoice(false)}
            className="border-2 border-primary_100 text-primary_100 px-[16px] py-[17px] rounded-xl"
          >
            Cancel
          </button>
        </div>
        {/* Footer Modal Invoice End */}
      </div>
    </Modal>
  );
};
