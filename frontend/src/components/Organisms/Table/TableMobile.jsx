import Button from "@/components/Atoms/Button/Button";
import Label from "@/components/Atoms/Input/Label";
import { priceFormat } from "@/components/utils";

const TableMobile = (props) => {
  const { datas, isUtang, btnText, handleDelete, handleUpdate } = props;
  return (
    <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
      {datas.map((data, index) => (
        <div key={index + 1} className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-night_40">{data.name}</h1>
            <div className="flex gap-3">
              <Button
                variant="primary_2"
                onClick={() => handleUpdate(data._id)}
                size="xs"
              >
                {btnText}
              </Button>

              <Button
                variant="secondary_2"
                onClick={() => handleDelete(data._id)}
                size="xs"
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="flex justify-between text-night_20 text-xs">
            <div>
              <p className="text-night_30 text-sm mt-1">{data.date}</p>
              <p className="text-night_30 text-sm mt-1">
                {priceFormat(data.total)}
              </p>
              <p className="mt-1">
                {isUtang
                  ? priceFormat(data.jumlahDibayar)
                  : priceFormat(data.jumlahDiterima)}
              </p>
            </div>
            <div className="self-end">
              {data.total === data.jumlahDibayar ||
              data.total === data.jumlahDiterima ? (
                <Label variant="success" size="xs">
                  Lunas
                </Label>
              ) : (
                <Label variant="danger" size="xs">
                  Belum Lunas
                </Label>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableMobile;
