import Button from "../Button/Button";
import Input from "../Input/Input";
import { priceFormat } from "../utils";

const TabelHitungKayu = ({
  handleChangeKayu,
  totalSisi,
  kubikasi,
  total,
  kayuSubmit,
  hitungKayu,
}) => {
  return (
    <>
      <form onSubmit={kayuSubmit}>
        <div className="hidden overflow-x-auto mt-5 md:block">
          <table className="w-full">
            <thead className="border-b border-t border-[#E1E2E9]">
              <tr className="text-left text-sm text-night_90">
                <th className="font-normal px-6 py-3">Section</th>
                <th className="font-normal px-6 py-3">Panjang</th>
                <th className="font-normal px-6 py-3 hidden md:table-cell">
                  Lebar
                </th>
                <th className="font-normal px-6 py-3">Tebal</th>
                <th className="font-normal px-6 py-3">Harga Kayu</th>
                <th className="font-normal px-6 py-3">Total Sisi</th>
                <th className="font-normal px-6 py-3">Kubikasi</th>
                <th className="font-normal px-6 py-3">Total Harga</th>
              </tr>
            </thead>
            <tbody className="border-b border-[#E1E2E9]">
              {/* Depan Start */}
              <tr className="text-night_40 text-left text-sm">
                <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                  <Input
                    readOnly={true}
                    name="depan"
                    defaultValue="depan"
                    variant="disabled"
                    placeholder="Depan"
                  />
                </td>
                <td className="whitespace-nowrap  px-6 py-3">
                  <Input
                    name="panjang"
                    type="number"
                    variant="text"
                    placeholder="Panjang"
                    onChange={handleChangeKayu}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3">
                  <Input
                    name="lebar"
                    type="number"
                    variant="text"
                    placeholder="Lebar"
                    onChange={handleChangeKayu}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <Input
                    name="tebal"
                    type="number"
                    variant="text"
                    placeholder="Tebal"
                    onChange={handleChangeKayu}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <Input
                    name="harga"
                    type="number"
                    variant="text"
                    placeholder="Harga"
                    onChange={handleChangeKayu}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <Input
                    name="totalsisi"
                    type="text"
                    variant="disabled"
                    placeholder="Total Sisi"
                    value={totalSisi}
                    readOnly={true}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <Input
                    name="kubikasi"
                    type="text"
                    variant="disabled"
                    placeholder="Kubikasi"
                    value={kubikasi}
                    readOnly={true}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <Input
                    name="total"
                    type="text"
                    variant="disabled"
                    placeholder="Total"
                    value={priceFormat(total)}
                    readOnly={true}
                  />
                </td>
              </tr>
              {/* Depan End */}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <Input
                    name="totalsisi"
                    type="text"
                    variant="disabled"
                    placeholder="Total Sisi"
                    value={totalSisi}
                    readOnly={true}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <Input
                    name="kubikasi"
                    type="text"
                    variant="disabled"
                    placeholder="Kubikasi"
                    value={kubikasi}
                    readOnly={true}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                  <Input
                    name="total"
                    type="text"
                    variant="disabled"
                    placeholder="Total"
                    value={priceFormat(total)}
                    readOnly={true}
                  />
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="flex justify-end gap-5 mt-5 mb-3 mr-3">
            <Button type="button" variant="primaryOutline" onClick={hitungKayu}>
              Hitung
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </div>
      </form>

      {/* Table view up to the `md:` breakpoint Start  */}
      <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
        <div className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-night_40"></h1>
            <button className="rounded-lg p-1 bg-[#97a5eb]/20 transition-all hover:scale-110">
              <span className="text-primary_100">Terima</span>
            </button>
          </div>
          <div className="text-night_20 text-xs">
            <p className="text-night_30 text-sm mt-1"></p>
            <p className="mt-1"></p>
          </div>
        </div>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}
    </>
  );
};

export default TabelHitungKayu;
