import Button from "@/components/Atoms/Button/Button";
import Label from "@/components/Atoms/Input/Label";
import { priceFormat } from "@/components/utils";
import { Checkbox } from "@components/Atoms/Checkbox/Checkbox";

const Table = (props) => {
  const { datas, isUtang, btnText, handleUpdate, handleDelete } = props;

  return (
    <div className="hidden overflow-x-auto mt-5 md:block">
      <table className="w-full">
        <thead className="border-b border-t border-[#E1E2E9]">
          <tr className="text-left text-sm text-night_90">
            <th className="py-3">
              <Checkbox />
            </th>
            <th className="font-normal px-6 py-3">Nama</th>
            <th className="font-normal px-6 py-3">Keterangan</th>
            <th className="font-normal px-6 py-3">Tanggal</th>
            <th className="font-normal px-6 py-3">Total</th>
            <th className="font-normal px-6 py-3 hidden md:table-cell">
              {isUtang ? "Jumlah Dibayar" : "Jumlah Diterima"}
            </th>
            <th className="font-normal px-6 py-3">Status</th>
            <th className="font-normal px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="border-b border-[#E1E2E9]">
          {datas.map((data, index) => (
            <tr key={index + 1} className="text-night_40 text-left text-sm">
              <td className="py-3">
                <Checkbox />
              </td>

              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                {data.name}
              </td>
              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                {data.keterangan}
              </td>
              <td className="whitespace-nowrap  px-6 py-3">{data.date}</td>
              <td className="whitespace-nowrap  px-6 py-3">
                {priceFormat(data.total)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                {isUtang
                  ? priceFormat(data.jumlahDibayar)
                  : priceFormat(data.jumlahDiterima)}
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                {data.total === data.jumlahDibayar ||
                data.total === data.jumlahDiterima ? (
                  <Label variant="success" size="sm">
                    Lunas
                  </Label>
                ) : (
                  <Label variant="danger" size="sm">
                    Belum Lunas
                  </Label>
                )}
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <div className="flex gap-3">
                  <Button
                    variant="primary_2"
                    onClick={() => handleUpdate(data._id)}
                    size="sm"
                  >
                    {btnText}
                  </Button>

                  <Button
                    variant="secondary_2"
                    onClick={() => handleDelete(data._id)}
                    size="sm"
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
