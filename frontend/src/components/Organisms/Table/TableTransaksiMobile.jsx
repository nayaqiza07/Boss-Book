import { priceFormat } from "@/components/utils";
import {
  ArrowDownSquare,
  ArrowUpSquare,
  Delete,
  EditSquare,
} from "react-iconly";

const TableTransaksiMobile = (props) => {
  const { datas, handleUpdate, handleDelete } = props;
  return (
    <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
      {datas.map((data, index) => (
        <div key={index + 1} className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-medium text-night_40">
              {data.clientData.map((client) => (
                <span key={client._id}>{client.name}</span>
              ))}
            </h1>
            <div className="flex gap-1 items-center">
              <span>
                {data.jenis === "Pemasukan" ? (
                  <ArrowDownSquare primaryColor="#519c66" />
                ) : (
                  <ArrowUpSquare primaryColor="#cc5f5f" />
                )}
              </span>
              <p className="text-night_30 text-sm">{data.kategori}</p>
            </div>
          </div>
          <div className="flex justify-between text-night_20 text-xs">
            <div>
              <p className="text-night_30 mt-1">{data.date}</p>
              <p className="text-night_30 mt-1">{data.keterangan}</p>
              <p className="mt-1">{priceFormat(data.jumlah)}</p>
            </div>
            <div className="flex gap-1 self-end">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTransaksiMobile;
