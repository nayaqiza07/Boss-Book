import { Search } from "../Search";
import { Filter } from "../FIlter";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GoArrowDownLeft } from "react-icons/go";
import { Table } from "../Table";

export const Content = () => {
  return (
    <div className="flex-1 px-9 py-6">
      {/* Top Start */}
      <section className="flex flex-col sm:flex-row justify-between">
        <Search />
        <Filter />
      </section>
      {/* Top End */}

      <section className="bg-primary p-5 rounded-xl mb-5">
        <h3 className="text-white text-2xl">Saldo</h3>
        <h3 className="text-white text-4xl">Rp. 100.000</h3>
      </section>

      {/* Section 3 Start */}
      <section className="flex flex-col sm:flex sm:flex-row h-80 gap-3 mb-5">
        <div className="border w-full p-5 h-full rounded-xl border-gray-300">
          <div className="flex items-center gap-1 w-full h-fit">
            <LiaProjectDiagramSolid color="#00d47f" size={20} />
            <h3 className="text-lg">Project</h3>
          </div>
          <div>
            <Table />
          </div>
        </div>

        <div className="flex flex-row sm:flex sm:flex-col gap-3 sm:w-1/4">
          <div className="flex items-center border rounded-lg p-5 h-24 w-1/2 sm:h-1/2 sm:w-full">
            <GoArrowDownLeft
              color="white"
              className="bg-primary rounded-xl w-10 h-10 p-2"
            />
            <div className="ml-3">
              <h3 className="text-lg sm:text-xl">Income</h3>
              <h3 className="text-2xl sm:text-4xl">Rp. 500.000</h3>
            </div>
          </div>
          <div className="flex items-center border rounded-lg p-5 h-24 w-1/2 sm:h-1/2 sm:w-full">
            <GoArrowDownLeft
              color="white"
              className="rotate-180 bg-secondary rounded-xl w-10 h-10 p-2"
            />
            <div className="ml-3">
              <h3 className="text-lg sm:text-xl">Expenses</h3>
              <h3 className="text-2xl sm:text-4xl">Rp. 500.000</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 End */}

      <section className="flex flex-col sm:flex sm:flex-row gap-3">
        <div className=" flex justify-between border h-24 sm:h-52 p-5 rounded-xl sm:w-1/3">
          <div className="flex h-fit">
            <GoArrowDownLeft color="#00d47f" size={20} />
            <h3 className="text-lg sm:text-xl ml-1.5">Ads</h3>
          </div>
          <h3 className="h-fit">Last 30 Days</h3>
        </div>
        <div className="border h-24 sm:h-52 rounded-xl sm:w-1/3">B</div>
        <div className="border h-24 sm:h-52 rounded-xl sm:w-1/3">C</div>
      </section>
    </div>
  );
};
