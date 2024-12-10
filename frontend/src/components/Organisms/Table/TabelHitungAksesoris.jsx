import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";
import Select from "@components/Atoms/Input/Select";

const TabelHitungAksesoris = () => {
  return (
    <>
      <div className="hidden overflow-x-auto mt-5 md:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">Nama Tukang Finishing</th>
              <th className="font-normal px-6 py-3">Panjang (cm)</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Lebar (cm)
              </th>
              <th className="font-normal px-6 py-3">Persen (%)</th>
              <th className="font-normal px-6 py-3">
                <Select
                  // list={jenisFinishingData}
                  name="jenisFinishing"
                  variant="text"
                  // value={jenisFinishing}
                  // onChange={handleInputSelect}
                  placeholder="Jenis Finishing"
                />
              </th>
              <th className="font-normal px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  name="namaTukangFinishing"
                  type="text"
                  variant="text"
                  placeholder="Nama Tukang Finishing"
                  // onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangFinishing"
                  type="number"
                  variant="text"
                  placeholder="Panjang in cm"
                  // onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarFinishing"
                  type="number"
                  variant="text"
                  placeholder="Lebar in cm"
                  // onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="persenFinishing"
                  type="number"
                  variant="text"
                  placeholder="Persen (%)"
                  // onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="jenisFinishing"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Finishing"
                  // value={jenisFinishing}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalFinishing"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  readOnly={true}
                  // value={priceFormat(total)}
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
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <label className="text-xs font-medium">
            Nama Tukang Finishing
            <Input
              name="namaTukangFinishing"
              type="text"
              variant="text"
              placeholder="Nama Tukang Finishing"
              // onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Panjang (cm)
            <Input
              name="panjangFinishing"
              type="number"
              variant="text"
              placeholder="Panjang in cm"
              // onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Lebar (cm)
            <Input
              name="lebarFinishing"
              type="number"
              variant="text"
              placeholder="Lebar in cm"
              // onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Persen (%)
            <Input
              name="persenFinishing"
              type="number"
              variant="text"
              placeholder="Persen (%)"
              // onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Total
            <Input
              name="totalFinishing"
              type="text"
              variant="disabled"
              placeholder="Total"
              readOnly={true}
              // value={priceFormat(total)}
            />
          </label>
          <Button
            type="button"
            variant="primaryOutline"
            // onClick={handleHitung}
            className="w-full"
          >
            Hitung
          </Button>
        </div>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}
    </>
  );
};

export default TabelHitungAksesoris;
