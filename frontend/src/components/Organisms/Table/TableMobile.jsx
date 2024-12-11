import { priceFormat } from "@/components/utils";

const TableMobile = (props) => {
  const { datas } = props;
  return (
    <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
      {datas.map((data, index) => (
        <div key={index + 1} className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-night_40">{data.name}</h1>
            <button className="rounded-lg p-1 bg-[#97a5eb]/20 transition-all hover:scale-110">
              <span className="text-primary_100">Terima</span>
            </button>
          </div>
          <div className="text-night_20 text-xs">
            <p className="text-night_30 text-sm mt-1">{data.date}</p>
            <p className="text-night_30 text-sm mt-1">
              {priceFormat(data.total)}
            </p>
            <p className="mt-1">{priceFormat(data.jumlahDiterima)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableMobile;
