export const ListInvoice = () => {
  return (
    <table className="w-full">
      <thead className="text-left text-[#535353]">
        <tr>
          <th className="p-3">No</th>
          <th className="p-3">Date</th>
          <th className="p-3">Client</th>
          <th className="p-3 text-right">Total</th>
          <th className="p-3 text-right">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-10 rounded shadow">
          <td className="px-3 text-xs">#GF00001</td>
          <td className="px-3 text-xs">01 Nov 2024</td>
          <td className="px-3 text-xs">Mr. 1</td>
          <td className="px-3 text-xs text-right">Rp. 100.000.000</td>
          <td className="px-3 text-xs text-right">Success</td>
        </tr>
        <tr className="h-10 rounded shadow">
          <td className="px-3 text-xs">#GF00002</td>
          <td className="px-3 text-xs">02 Nov 2024</td>
          <td className="px-3 text-xs">Mr. 2</td>
          <td className="px-3 text-xs text-right">Rp. 200.000.000</td>
          <td className="px-3 text-xs text-right">Success</td>
        </tr>
        <tr className="h-10 rounded shadow">
          <td className="px-3 text-xs">#GF00003</td>
          <td className="px-3 text-xs">03 Nov 2024</td>
          <td className="px-3 text-xs">Mr. 3</td>
          <td className="px-3 text-xs text-right">Rp. 300.000.000</td>
          <td className="px-3 text-xs text-right">Success</td>
        </tr>
      </tbody>
    </table>
  );
};
