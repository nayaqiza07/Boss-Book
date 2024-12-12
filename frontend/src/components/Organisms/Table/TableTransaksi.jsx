import { Checkbox } from "@/components/Atoms/Checkbox/Checkbox";
import Label from "@/components/Atoms/Input/Label";
import { priceFormat } from "@/components/utils";

const TableTransaksi = (props) => {
  const { datas } = props;
  return (
    <div className="hidden overflow-x-auto mt-5 md:block">
      <table className="w-full">
        <thead className="border-b border-t border-[#E1E2E9]">
          <tr className="text-left text-sm text-night_90">
            <th className="py-3">
              <Checkbox />
            </th>
            <th className="font-normal px-6 py-3">Deskripsi</th>
            <th className="font-normal px-6 py-3">Tanggal</th>
            <th className="font-normal px-6 py-3">Total</th>
            <th className="font-normal px-6 py-3 hidden md:table-cell">
              Kategori
            </th>
            <th className="font-normal px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="border-b border-[#E1E2E9]">
          {datas.map((data, index) => (
            <tr key={index + 1} className="text-night_40 text-left text-sm">
              <td className="py-3">
                <Checkbox />
              </td>

              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                {data.deskripsi}
              </td>
              <td className="whitespace-nowrap  px-6 py-3">{data.date}</td>
              <td className="whitespace-nowrap  px-6 py-3">
                {priceFormat(data.nominal)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">{data.kategori}</td>
              <td className="whitespace-nowrap  px-6 py-3">
                {data.status === "In" ? (
                  <Label variant="success" size="sm">
                    {data.status}
                  </Label>
                ) : (
                  <Label variant="danger" size="sm">
                    {data.status}
                  </Label>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaksi;
