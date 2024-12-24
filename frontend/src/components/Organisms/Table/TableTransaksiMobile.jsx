import Label from "@/components/Atoms/Input/Label";
import { priceFormat } from "@/components/utils";

const TableTransaksiMobile = (props) => {
  const { datas } = props;
  return (
    <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
      {datas.map((data, index) => (
        <div key={index + 1} className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-night_40">{data.name}</h1>
            <p className="text-night_30 text-sm mt-1">{data.kategori}</p>
          </div>
          <div className="flex justify-between text-night_20 text-xs">
            <div>
              <p className="text-night_30 text-sm mt-1">{data.date}</p>
              <p className="mt-1">{priceFormat(data.jumlah)}</p>
            </div>
            <div className="self-end">
              {data.jenis === "Pemasukan" ? (
                <Label variant="success" size="xs">
                  {data.jenis}
                </Label>
              ) : (
                <Label variant="danger" size="xs">
                  {data.jenis}
                </Label>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTransaksiMobile;
