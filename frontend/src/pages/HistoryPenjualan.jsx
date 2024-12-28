import { getAllTransaksi } from "@/api/transaksiApi";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { Card } from "@/components/Organisms/Card/Card";
import { priceFormat } from "@/components/utils";
import { useEffect, useState } from "react";
import { Bag } from "react-iconly";

const HistoryPenjualan = () => {
  const [historyPemasukan, setHistoryPemasukan] = useState([]);

  const fetchDataHistory = () => {
    getAllTransaksi().then(({ historyPemasukan }) => {
      setHistoryPemasukan(historyPemasukan);
    });
  };

  useEffect(() => {
    fetchDataHistory();
  }, []);

  console.log(historyPemasukan);

  return (
    <div className="flex flex-col p-5">
      <Card>
        {historyPemasukan.length === 0 ? (
          <DataEmpty
            icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
          />
        ) : (
          <table className="w-full">
            <thead className="border-b border-t border-[#E1E2E9]">
              <tr className="text-left text-sm text-night_90">
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
                  Jumlah Dibayar
                </th>
                <th className="font-normal px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="border-b border-[#E1E2E9]">
              {historyPemasukan.length > 0 &&
                historyPemasukan.map((history) => (
                  <tr
                    key={history._id}
                    className="text-night_40 text-left text-sm font-medium border-b"
                  >
                    <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                      {history.kategori}
                      {/* Stack Table Start */}
                      <dl className="xl:hidden">
                        <dt className="sr-only">Nama</dt>
                        <dd className="text-night_20 text-xs mt-1 truncate">
                          {history.clientData.map((client) => (
                            <span key={client._id}>{client.name}</span>
                          ))}
                        </dd>
                        <dt className="sr-only">Date</dt>
                        <dd className="text-night_20 text-xs mt-1 truncate">
                          {/* {data.date} */}
                        </dd>
                        <dt className="sr-only">Jatuh Tempo</dt>
                        <dd className="text-night_20 text-xs mt-1 truncate">
                          {/* {data.jatuhTempo} */}
                        </dd>
                        <dt className="sr-only">Jumlah</dt>
                        <dd className="text-night_20 text-xs mt-1 truncate">
                          {/* {priceFormat(data.jumlah)} */}
                        </dd>
                      </dl>
                      {/* Stack Table End */}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 hidden xl:table-cell">
                      {history.clientData.map((client) => (
                        <span key={client._id}>{client.name}</span>
                      ))}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                      {history.keterangan.split("\n").map((row, index) => (
                        <p key={index}>{row}</p>
                      ))}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 hidden xl:table-cell">
                      {history.date}
                    </td>
                    <td className="whitespace-nowrap  px-6 py-3 hidden xl:table-cell">
                      {history.jatuhTempo}
                    </td>
                    <td className="whitespace-nowrap  px-6 py-3 hidden xl:table-cell">
                      {priceFormat(history.jumlah)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3">
                      {priceFormat(history.jumlahPembayaran)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3">
                      {history.jumlah === history.jumlahPembayaran
                        ? "Lunas"
                        : "Belum Lunas"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
};

export default HistoryPenjualan;
