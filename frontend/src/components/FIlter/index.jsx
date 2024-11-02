import { MdOutlineDateRange } from "react-icons/md";
import { CiExport } from "react-icons/ci";

export const Filter = () => {
  return (
    <div className="flex flex-row justify-between gap-3">
      {/* Date Start */}
      <div className="flex items-center border border-gray-300 rounded-lg h-10 mb-5">
        <button className="flex items-center gap-1 border-r h-full px-3">
          <MdOutlineDateRange size={20} />
          <span>1 November 2024</span>
        </button>
        <button className="h-full px-3">Last 30 Days</button>
      </div>
      {/* Date End */}

      <button className="flex gap-1 border border-gray-300 items-center bg-white rounded-lg h-10 px-3 mb-5">
        <CiExport size={20} />
        <span>Export</span>
      </button>
    </div>
  );
};
