import Button from "../Button/Button";
import Input from "../Input/Input";

const TabelHitungTukangFinishing = () => {
  return (
    <>
      <div className="hidden overflow-x-auto mt-5 md:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">Nama</th>
              <th className="font-normal px-6 py-3">Panjang</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Lebar
              </th>
              <th className="font-normal px-6 py-3">Persen</th>
              <th className="font-normal px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  name="namaTukang"
                  type="text"
                  variant="text"
                  placeholder="Nama Tukang"
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjang"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebar"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="persen"
                  type="number"
                  variant="text"
                  placeholder="Persen"
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="total"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  readOnly={true}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end gap-5 mt-5 mb-3 mr-3">
          <Button type="button" variant="primaryOutline">
            Hitung
          </Button>
        </div>
      </div>

      {/* Table view up to the `md:` breakpoint Start  */}
      <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
        <div className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-night_40">0</h1>
            <button className="rounded-lg p-1 bg-[#97a5eb]/20 transition-all hover:scale-110">
              <span className="text-primary_100">Terima</span>
            </button>
          </div>
          <div className="text-night_20 text-xs">
            <p className="text-night_30 text-sm mt-1">0</p>
            <p className="mt-1">0</p>
          </div>
        </div>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}
    </>
  );
};

export default TabelHitungTukangFinishing;
