import { BiWater, BiSolidSprayCan } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import { FaAd } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const TransactionList = () => {
  const today = [
    {
      name: "Water Bill",
      status: "pending",
      price: "-",
      num: "Rp. 100.000",
    },
  ];

  const yesterday = [
    {
      name: "Sales",
      status: "success",
      price: "+",
      num: "Rp. 10.000.000",
    },
    {
      name: "Ads",
      status: "pending",
      price: "-",
      num: "Rp. 1.000.000",
    },
    {
      name: "Electricity",
      status: "warning",
      price: "-",
      num: "Rp. 500.000",
    },
    {
      name: "Finishing",
      status: "unsuccess",
      price: "-",
      num: "Rp. 500.000",
    },
  ];

  const bgColor = (status) => {
    switch (status) {
      case "success":
        return "bg-blue-500";
      case "pending":
        return "bg-teal-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-red-500";
    }
  };

  const color = (price) => {
    switch (price) {
      case "+":
        return "text-green-600";
      case "-":
        return "text-red-600";
      default:
        return "text-black";
    }
  };
  const icons = (name) => {
    switch (name) {
      case "Water Bill":
        return <BiWater color="white" />;
      case "Sales":
        return <FaCartShopping color="white" />;
      case "Ads":
        return <FaAd color="white" />;
      case "Electricity":
        return <GiElectric color="white" />;
      case "Finishing":
        return <BiSolidSprayCan color="white" />;
      default:
        return <IoMdClose color="white" />;
    }
  };

  return (
    <section>
      <div className="mt-10">
        {/* Today */}
        <h3>Today</h3>
        <div>
          {today.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center border-b border-b-gra y-200 py-3"
              >
                <div className="w-10 h-10 rounded bg-indigo-500 flex items-center justify-center">
                  {icons(val.name)}
                </div>
                <div className="flex-1 ml-3">
                  <div className="text-lg font-bold">{val.name}</div>
                </div>
                <div>
                  <div className={`${color(val.price)}`}>
                    {val.price}
                    {val.num}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Akhir Today */}

        {/* Yesterday */}
        <h3 className="mt-10">Yesterday</h3>
        <div>
          {yesterday.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center border-b border-b-gray-200 py-3"
              >
                <div
                  className={`w-10 h-10 rounded flex items-center justify-center ${bgColor(
                    val.status
                  )}`}
                >
                  {icons(val.name)}
                </div>
                <div className="flex-1 ml-3">
                  <div className="text-lg font-bold">{val.name}</div>
                </div>
                <div>
                  <div className={`${color(val.price)}`}>
                    {val.price}
                    {val.num}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Akhir Yesterday */}
      </div>
    </section>
  );
};

export default TransactionList;
