import { Checkbox } from "@/components/Atoms/Checkbox/Checkbox";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { priceFormat } from "@/components/utils";
import {
  ArrowDownSquare,
  ArrowUpSquare,
  Bag,
  Delete,
  EditSquare,
} from "react-iconly";

const TableTransaksi = (props) => {
  const { datas, handleUpdate, handleDelete } = props;
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
              <th className="font-normal px-5 py-3">Kategori</th>
              <th className="font-normal px-5 py-3 hidden xl:table-cell">
                Nama
              </th>
              <th className="font-normal px-5 py-3">Keterangan</th>
              <th className="font-normal px-5 py-3">Tanggal</th>
              <th className="font-normal px-5 py-3 hidden xl:table-cell">
                Total
              </th>
              <th className="font-normal px-5 py-3 text-center">Jenis</th>
              <th className="font-normal px-5 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            {datas.length > 0 &&
              // datas.filter((data) => data.kategori === "nonTunai") &&
              datas.map((data, index) => (
                <tr
                  key={index + 1}
                  className="text-night_40 text-left text-sm border-b"
                >
                  <td className="py-2.5">
                    <Checkbox />
                  </td>

                  <td className="whitespace-nowrap px-5 py-2.5 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {data.kategori}

                    {/* Stack Table Start */}
                    <dl className="xl:hidden">
                      <dt className="sr-only">Nama</dt>
                      <dd className="text-night_20 text-xs mt-1 truncate">
                        {data.name ||
                          data.clientData.map((client) => (
                            <span key={client._id}>{client.name}</span>
                          ))}
                      </dd>
                      <dt className="sr-only">Jumlah</dt>
                      <dd className="text-night_20 text-xs mt-1 truncate">
                        {priceFormat(data.jumlah)}
                      </dd>
                    </dl>
                    {/* Stack Table End */}
                  </td>
                  <td className="whitespace-nowrap px-5 py-2.5 hidden xl:table-cell">
                    {data.name ||
                      data.clientData.map((client) => (
                        <span key={client._id}>{client.name}</span>
                      ))}
                  </td>
                  <td className="whitespace-nowrap px-5 py-2.5 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {data.keterangan.split("\n").map((row, index) => (
                      <p key={index}>{row}</p>
                    ))}
                  </td>
                  <td className="whitespace-nowrap  px-5 py-2.5">
                    {data.date}
                  </td>
                  <td className="whitespace-nowrap  px-5 py-2.5 hidden xl:table-cell">
                    {priceFormat(data.jumlah)}
                  </td>
                  <td className="whitespace-nowrap px-5 py-2.5">
                    <div className="flex justify-center">
                      {data.jenis === "Pemasukan" ? (
                        <ArrowDownSquare primaryColor="#519c66" />
                      ) : (
                        <ArrowUpSquare primaryColor="#cc5f5f" />
                      )}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-2.5">
                    <div className="flex gap-3">
                      <span
                        onClick={() => handleUpdate(data._id)}
                        className="cursor-pointer"
                      >
                        <EditSquare primaryColor="#5570f1" />
                      </span>

                      <span
                        onClick={() => handleDelete(data._id)}
                        className="cursor-pointer"
                      >
                        <Delete primaryColor="#cc5f5f" />
                      </span>
                    </div>
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
