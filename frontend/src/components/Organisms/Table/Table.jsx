import Button from "@/components/Atoms/Button/Button";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { priceFormat } from "@/components/utils";
import { Checkbox } from "@components/Atoms/Checkbox/Checkbox";
import { Bag } from "react-iconly";

const Table = (props) => {
  const { datas, isGaji, btnText, handleEdit, handleUpdate, handleDelete } =
    props;

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
              <th className="font-normal px-6 py-3">Kategori</th>
              <th className="font-normal px-6 py-3 hidden xl:table-cell">
                Nama
              </th>
              <th className="font-normal px-6 py-3">Keterangan</th>
              <th className="font-normal px-6 py-3 hidden xl:table-cell">
                Tanggal
              </th>
              <th className="font-normal px-6 py-3 hidden xl:table-cell">
                Jatuh Tempo
              </th>
              <th className="font-normal px-6 py-3 hidden xl:table-cell">
                Total
              </th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                {isGaji ? "Jumlah Dibayar" : "Jumlah Diterima"}
              </th>
              {/* <th className="font-normal px-6 py-3">Status</th> */}
              <th className="font-normal px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            {datas.length > 0 &&
              datas.map((data, index) => (
                <tr
                  key={index + 1}
                  className="text-night_40 text-left text-sm font-medium border-b"
                >
                  <td className="py-3">
                    <Checkbox />
                  </td>

                  <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
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
                      <dt className="sr-only">Date</dt>
                      <dd className="text-night_20 text-xs mt-1 truncate">
                        {data.date}
                      </dd>
                      <dt className="sr-only">Jatuh Tempo</dt>
                      <dd className="text-night_20 text-xs mt-1 truncate">
                        {data.jatuhTempo}
                      </dd>
                      <dt className="sr-only">Jumlah</dt>
                      <dd className="text-night_20 text-xs mt-1 truncate">
                        {priceFormat(data.jumlah)}
                      </dd>
                    </dl>
                    {/* Stack Table End */}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 hidden xl:table-cell">
                    {data.name ||
                      data.clientData.map((client) => (
                        <span key={client._id}>{client.name}</span>
                      ))}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {data.keterangan.split("\n").map((row, index) => (
                      <p key={index}>{row}</p>
                    ))}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 hidden xl:table-cell">
                    {data.date}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3 hidden xl:table-cell">
                    {data.jatuhTempo}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3 hidden xl:table-cell">
                    {priceFormat(data.jumlah)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(data.jumlahPembayaran)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                    <div className="flex gap-3">
                      <Button
                        variant="primaryOutline"
                        onClick={() => handleEdit(data._id)}
                        size="sm"
                      >
                        Edit
                      </Button>

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
      )}
    </div>
  );
};

export default Table;
