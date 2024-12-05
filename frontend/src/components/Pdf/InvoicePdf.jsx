import { priceFormat } from "../utils";

const InvoicePdf = ({ dataOrderById, componentPrint }) => {
  return (
    <>
      {/* // <div className="p-4 mt-7 grid grid-cols-2 flex-1 border rounded-lg text-[6px] lg:text-xs"> */}
      <div
        ref={componentPrint}
        className="p-4 flex-1 w-[210mm] h-[297mm] text-sm border rounded"
      >
        {/* Section 1 Start */}
        <section className="text-right">
          <h6 className="font-bold">GEORGE FURNITURE</h6>
          <p>
            JL.Bangsri - Mlonggo Rt/39 Rw 08 Jambu - Mlonggo <br />
            Jepara Jawa tengah 59452
          </p>
          <p>081779068604</p>
        </section>
        {/* Section 1 End */}

        {/* Section 2 Start */}
        <section className="flex justify-between mt-7">
          <div>
            <h6 className="font-bold">Invoice for</h6>
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
        <section className="mt-7 border rounded-lg p-3 h-fit">
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
                  <td className="text-right p-2">{priceFormat(item.price)}</td>
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
        <section className="mt-7">
          <div className="flex justify-between">
            <div>
              <h6 className="font-bold">Payment</h6>
              <p>BNI an. Muhammad Hafidz Syaifullah Ali 1327844630</p>
              <p>BCA an. Muhammad Hafidz Syaifullah Ali 8715249525</p>
            </div>

            <div className="text-right border rounded p-3">
              <p>
                Sub Total:
                <span className="ml-3">{priceFormat(dataOrderById.total)}</span>
              </p>
              <p>
                Total:
                <span className="ml-3">{priceFormat(dataOrderById.total)}</span>
              </p>
            </div>
          </div>
        </section>
        {/* Section 4 End */}

        {/* Section 5 Start */}
        <section className="mt-10">
          <p>- Dp 50% proses produksi akan di update per minggunya.</p>
          <p>
            - setelah barang jadi customer akan dikirim foto produk dan bil dari
            ekspedisi dan melakukan pelunasan sisa pembayaran.
          </p>
        </section>
        {/* Section 5 End */}

        {/* <div className="flex flex-col justify-center items-center">
          <img src={dataOrderById.image} width={500} height={500} />
        </div> */}
      </div>
    </>
  );
};

export default InvoicePdf;
