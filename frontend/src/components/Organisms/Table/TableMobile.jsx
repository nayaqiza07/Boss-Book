import Button from "@/components/Atoms/Button/Button";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { priceFormat } from "@/components/utils";
import { Bag, Delete, EditSquare } from "react-iconly";

const TableMobile = (props) => {
  const { datas, btnText, handleEdit, handleDelete, handleUpdate } = props;
  return (
    <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
      {datas.length === 0 ? (
        <DataEmpty
          icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
          className="col-span-2"
        />
      ) : (
        datas.map((data, index) => (
          <div
            key={index + 1}
            className="p-3 border border-[#E1E2E9] rounded-lg"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-sm font-medium text-night_40">
                {data.clientData.map((client) => (
                  <span key={client._id}>{client.name}</span>
                ))}
              </h1>
              <div className="flex gap-3">
                <span
                  onClick={() => handleEdit(data._id)}
                  className="cursor-pointer"
                >
                  <EditSquare primaryColor="#5570f1" />
                </span>

                <Button
                  variant="primary_2"
                  onClick={() => handleUpdate(data._id)}
                  size="xs"
                >
                  {btnText}
                </Button>

                <span
                  onClick={() => handleDelete(data._id)}
                  className="cursor-pointer"
                >
                  <Delete primaryColor="#cc5f5f" />
                </span>
              </div>
            </div>
            <div className="flex justify-between text-night_20 text-xs">
              <div>
                <p className="text-night_30 mt-1">{data.date}</p>
                <p className="text-night_30  mt-1">
                  {priceFormat(data.jumlah)}
                </p>
              </div>
              <div className="self-end">
                <p className="mt-1">
                  Jumlah Dibayar: <br /> {priceFormat(data.jumlahPembayaran)}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TableMobile;
