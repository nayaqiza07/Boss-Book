import { GoArrowDownLeft } from "react-icons/go";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { Table } from "../Table";

export const Section3 = () => {
  return (
    <section className="flex flex-col sm:flex sm:flex-row gap-3 mb-5">
      <div className="border w-full h-full rounded-xl p-7 border-gray-300">
        {/* Title Start */}
        <div className="flex items-center gap-1 w-full mb-5">
          <LiaProjectDiagramSolid color="#00d47f" size={20} />
          <h3 className="text-md font-semibold text-[#707174]">Project</h3>
        </div>
        {/* Title End */}

        <div className="flex flex-col md:flex md:flex-row gap-3">
          <div className="w-full md:border-b-0 md:border-r md:pr-5">
            <Table />
          </div>

          <div className="flex flex-row md:flex-col w-full md:w-2/5">
            <div className="flex items-center border-r md:border-r-0 md:border-b p-5 w-full h-full">
              <GoArrowDownLeft
                color="white"
                className="bg-primary rounded-xl w-10 h-10 p-2"
              />
              <div className="ml-5 md:ml-10">
                <h3 className="text-sm md:text-xl">Income</h3>
                <h3 className="text-lg md:text-4xl">Rp. 500.000</h3>
              </div>
            </div>
            <div className="flex items-center p-5 w-full h-full">
              <GoArrowDownLeft
                color="white"
                className="rotate-180 bg-secondary rounded-xl w-10 h-10 p-2"
              />
              <div className="ml-5 md:ml-10">
                <h3 className="text-sm md:text-xl">Expense</h3>
                <h3 className="text-lg md:text-4xl">Rp. 500.000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
