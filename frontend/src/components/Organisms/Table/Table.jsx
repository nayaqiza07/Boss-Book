import { Checkbox } from "@components/Atoms/Checkbox/Checkbox";

const Table = () => {
  const datas = [
    {
      name: "Mr. 1",
      jumlah: 1000000,
      belumDiterima: 5000,
    },
    {
      name: "Mr. 2",
      jumlah: 2000000,
      belumDiterima: 5000,
    },
    {
      name: "Mr. 3",
      jumlah: 3000000,
      belumDiterima: 5000,
    },
  ];

  return (
    <>
      <div className="hidden overflow-x-auto mt-5 md:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="py-3">
                <Checkbox />
              </th>
              <th className="font-normal px-6 py-3">Nama</th>
              <th className="font-normal px-6 py-3">Jumlah</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Belum Diterima
              </th>
              <th className="font-normal px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            {datas.map((data, index) => (
              <tr key={index + 1} className="text-night_40 text-left text-sm">
                <td className="py-3">
                  <Checkbox />
                </td>

                <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                  <span
                    // onClick={() => handleModalInvoice(order.orderNumber)}
                    className="cursor-pointer "
                  >
                    {data.name}
                  </span>
                </td>
                <td className="whitespace-nowrap  px-6 py-3">{data.jumlah}</td>
                <td className="whitespace-nowrap px-6 py-3">
                  {data.belumDiterima}
                </td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <button className="rounded-lg py-1 px-2 bg-[#97a5eb]/20 transition-all hover:scale-110">
                    <span className="text-primary_100">Terima</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table view up to the `md:` breakpoint Start  */}
      <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
        {Array.isArray(datas) &&
          datas.map((data, index) => (
            <div
              key={index + 1}
              className="p-3 border border-[#E1E2E9] rounded-lg"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-night_40">{data.name}</h1>
                <button className="rounded-lg p-1 bg-[#97a5eb]/20 transition-all hover:scale-110">
                  <span className="text-primary_100">Terima</span>
                </button>
              </div>
              <div className="text-night_20 text-xs">
                <p className="text-night_30 text-sm mt-1">{data.jumlah}</p>
                <p className="mt-1">{data.belumDiterima}</p>
              </div>
            </div>
          ))}
      </div>
      {/* Table view up to the `md:` breakpoint End  */}
    </>
  );
};

export default Table;
