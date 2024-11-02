import { FaAd } from "react-icons/fa";
import { PiPaintBrushBroadLight } from "react-icons/pi";
import { GiElectric } from "react-icons/gi";

export const Section4 = () => {
  return (
    <section className="flex flex-col md:flex md:flex-row gap-3">
      {/* Card 1 Start */}
      <div className="border border-gray-300 p-5 rounded-xl md:w-1/3">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-fit">
            <FaAd color="#00d47f" size={25} />
            <h3 className="text-md sm:text-xl ml-1.5 font-semibold text-[#707174]">
              Ads
            </h3>
          </div>
          <h3 className="h-fit text-sm text-gray-400">Last 30 Days</h3>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-[#535353]">
            Rp. 1.000.000
          </h3>
        </div>
      </div>
      {/* Card 1 End */}

      {/* Card 2 Start */}
      <div className="border border-gray-300 p-5 rounded-xl md:w-1/3">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-fit">
            <GiElectric color="#00d47f" size={25} />
            <h3 className="text-md sm:text-xl ml-1.5 font-semibold text-[#707174]">
              Electricity
            </h3>
          </div>
          <h3 className="h-fit text-sm text-gray-400">Last 30 Days</h3>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-[#535353]">
            Rp. 1.000.000
          </h3>
        </div>
      </div>
      {/* Card 2 End */}

      {/* Card 3 Start */}
      <div className="border border-gray-300 p-5 rounded-xl md:w-1/3">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-fit">
            <PiPaintBrushBroadLight color="#00d47f" size={25} />
            <h3 className="text-md sm:text-xl ml-1.5 font-semibold text-[#707174]">
              Finishing
            </h3>
          </div>
          <h3 className="h-fit text-sm text-gray-400">Last 30 Days</h3>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-[#535353]">
            Rp. 1.000.000
          </h3>
        </div>
      </div>
      {/* Card 3 End */}
    </section>
  );
};
