export const TableInvoice = () => {
  return (
    <div className="relative flex flex-col h-64">
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
          <tr className="border-b">
            <td className="text-xs px-3 md:px-6 py-3">
              <h2 className="font-semibold">Kursi</h2>
              <p>Ukuran</p>
            </td>
            <td className="text-sm text-center px-3 sm:px-6 py-3">1</td>
            <td className="text-sm text-right px-3 sm:px-6 py-3">
              Rp. 1.000.000
            </td>
            <td className="text-sm text-right px-3 sm:px-6 py-3">
              Rp. 1.000.000
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="border-b">
            <td rowSpan={2} colSpan={2} className="text-sm px-3 md:px-6 py-3">
              <div className="text-xs">
                <h2 className="font-semibold">Payment</h2>
                <p>BNI an. Muhammad Hafidz Syaifullah Ali 1327844630</p>
                <p>BCA an. Muhammad Hafidz Syaifullah Ali 8715249525</p>
              </div>
            </td>
            <td className="text-sm text-right px-3 sm:px-6 py-3">Subtotal</td>
            <td className="text-sm text-right px-3 sm:px-6 py-3">
              Rp. 1.000.000
            </td>
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
