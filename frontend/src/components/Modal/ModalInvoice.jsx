import { useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import { Modal } from ".";
import { priceFormat } from "../utils";

export const ModalInvoice = ({
  openModalInvoice,
  setOpenModalInvoice,
  dataOrderById,
}) => {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".receipt-pdf");
    setLoader(true);
    html2canvas(capture, { scale: 2, quality: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save(
        `${dataOrderById.orderNumber}-${dataOrderById.client?.name}-${dataOrderById.date}.pdf`
      );
    });
  };

  return (
    <Modal
      openModal={openModalInvoice}
      onCloseModal={() => setOpenModalInvoice(false)}
    >
      <div className="flex flex-col max-w-72 lg:max-w-[850px] lg:h-[870px]">
        {/* Head Modal Invoice Start */}
        <h2 className="text-primary_100">#{dataOrderById.orderNumber}</h2>
        {/* Head Modal Invoice End */}

        {/* Content Modal Invoice Start */}
        <div className="receipt-pdf p-4 mt-7 grid grid-cols-2 flex-1 border rounded-lg text-[6px] lg:text-xs">
          {/* Section 1 Start */}
          <section className="text-right col-span-2">
            <h6 className="font-bold">GEORGE FURNITURE</h6>
            <p>
              JL.Bangsri - Mlonggo Rt/39 Rw 08 Jambu - Mlonggo <br />
              Jepara Jawa tengah 59452
            </p>
            <p>081779068604</p>
          </section>
          {/* Section 1 End */}

          {/* Section 2 Start */}
          <section className="flex justify-between mt-7 col-span-2">
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
          </section>
          {/* Section 2 End */}

          {/* Section 3 Start */}
          <section className="mt-7 border rounded-lg p-3 col-span-2 h-fit">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="text-left p-2">Item</th>
                  <th className="text-center p-2">Qty</th>
                  <th className="text-right p-2">Price</th>
                  <th className="text-right p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {dataOrderById.items?.map((item) => (
                  <tr key={item._id}>
                    <td className="text-left p-2">{item.name}</td>
                    <td className="text-center p-2">{item.quantity}</td>
                    <td className="text-right p-2">
                      {priceFormat(item.price)}
                    </td>
                    <td className="text-right p-2">
                      {priceFormat(item.totalPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          {/* Section 3 End */}

          {/* Section 4 Start */}
          <section className="mt-7 col-span-2">
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
          </section>
          {/* Section 4 End */}

          {/* Section 5 Start */}
          <section className="col-span-2 mt-10">
            <p>- Dp 50% proses produksi akan di update per minggunya.</p>
            <p>
              - setelah barang jadi customer akan dikirim foto produk dan bil
              dari ekspedisi dan melakukan pelunasan sisa pembayaran.
            </p>
          </section>
        </div>
        {/* Section 5 End */}
        {/* Content Modal Invoice End */}

        {/* Footer Modal Invoice Start */}
        <section className="flex justify-between mt-5">
          <button
            onClick={downloadPDF}
            disabled={!loader === false}
            className="text-primary_100"
          >
            {loader ? (
              <span>Downloading...</span>
            ) : (
              <span>Download Invoice</span>
            )}
          </button>

          <button
            onClick={() => setOpenModalInvoice(false)}
            className="border-2 border-primary_100 text-primary_100 px-3 py-2 rounded"
          >
            Cancel
          </button>
        </section>
        {/* Footer Modal Invoice End */}
      </div>
    </Modal>
  );
};
