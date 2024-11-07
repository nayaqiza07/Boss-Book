/* eslint-disable react/prop-types */
export const TableInvoice = ({ List }) => {
  // Total
  let sum = 0;
  List.forEach((price) => {
    sum += parseInt(price.price);
  });

  return (
    <div className="relative flex flex-col">
      <table className="w-full cursor-default">
        <thead>
          <tr className="border border-solid border-x-0 text-xs">
            <th className="px-3 text-left md:px-6 py-3 font-semibold">
              Produk
            </th>
            <th className="px-3 md:px-6 py-3 font-semibold">Kuantitas</th>
            <th className="px-3 text-right md:px-6 py-3 font-semibold">
              Harga
            </th>
            <th className="px-3 text-right md:px-6 py-3 font-semibold">
              Jumlah
            </th>
          </tr>
        </thead>
        <tbody>
          {List.map((item, index) => {
            return (
              <tr key={index} className="border-b">
                <td className="text-xs px-3 md:px-6 py-3">
                  <h2 className="font-semibold">{item.item}</h2>
                  <p>{item.note}</p>
                </td>
                <td className="text-sm text-center px-3 sm:px-6 py-3">
                  {item.quantity}
                </td>
                <td className="text-sm text-right px-3 sm:px-6 py-3">
                  {item.price}
                </td>
                <td className="text-sm text-right px-3 sm:px-6 py-3">
                  {item.quantity * item.price}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="border-b">
            <td rowSpan={2} colSpan={2} className="text-sm px-3 md:px-6 py-3">
              <div className="text-xs">
                <h2 className="font-semibold">Payment</h2>
                <p className="my-3">
                  BNI <br />
                  an. Muhammad Hafidz Syaifullah Ali <br />
                  1327844630
                </p>
                <p>
                  BCA <br />
                  an. Muhammad Hafidz Syaifullah Ali <br /> 8715249525
                </p>
              </div>
            </td>
            <td className="text-sm text-right px-3 sm:px-6 py-3">Subtotal</td>
            <td className="text-sm text-right px-3 sm:px-6 py-3">{sum}</td>
          </tr>
          <tr className="border-b">
            <td className="text-sm text-right px-3 sm:px-6 py-3">Total</td>
            <td className="text-sm text-right px-3 sm:px-6 py-3">
              Rp. 1.000.000
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="text-sm text-right px-3 sm:px-6 py-3">
              <h2 className="font-semibold">Jumlah yang harus dibayarkan</h2>
              <p>Rp. 1.000.000</p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
