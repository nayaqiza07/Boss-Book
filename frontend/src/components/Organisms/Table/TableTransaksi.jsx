import { Checkbox } from "@/components/Atoms/Checkbox/Checkbox";
import Label from "@/components/Atoms/Input/Label";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { priceFormat } from "@/components/utils";
import { Bag } from "react-iconly";

const TableTransaksi = (props) => {
  const { datas } = props;
  return (
    <div className="hidden overflow-x-auto mt-5 md:block">
      {datas.length === 0 ? (
        <DataEmpty icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />} />
      ) : (
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="py-3">
                <Checkbox />
              </th>
              <th className="font-normal px-6 py-3">Nama</th>
              <th className="font-normal px-6 py-3">Keterangan</th>
              <th className="font-normal px-6 py-3">Tanggal</th>
              <th className="font-normal px-6 py-3 hidden xl:table-cell">
                Total
              </th>
              <th className="font-normal px-6 py-3 hidden xl:table-cell">
                Kategori
              </th>
              <th className="font-normal px-6 py-3">Jenis</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            {datas.length > 0 &&
              // datas.filter((data) => data.kategori === "nonTunai") &&
              datas.map((data, index) => (
                <tr key={index + 1} className="text-night_40 text-left text-sm">
                  <td className="py-3">
                    <Checkbox />
                  </td>

                  <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {data.name}

                    {/* Stack Table Start */}
                    <dl className="xl:hidden">
                      <dt className="sr-only">Kategori</dt>
                      <dd className="text-night_20 text-xs mt-1 truncate">
                        {data.kategori}
                      </dd>
                      <dt className="sr-only">Jumlah</dt>
                      <dd className="text-night_20 text-xs mt-1 truncate">
                        {priceFormat(data.jumlah)}
                      </dd>
                    </dl>
                    {/* Stack Table End */}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {data.keterangan}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3">{data.date}</td>
                  <td className="whitespace-nowrap  px-6 py-3 hidden xl:table-cell">
                    {priceFormat(data.jumlah)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 hidden xl:table-cell">
                    {data.kategori}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3">
                    {data.jenis === "Pemasukan" ? (
                      <Label variant="success" size="sm">
                        {data.jenis}
                      </Label>
                    ) : (
                      <Label variant="danger" size="sm">
                        {data.jenis}
                      </Label>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableTransaksi;
