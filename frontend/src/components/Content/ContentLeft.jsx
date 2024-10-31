/* eslint-disable react/prop-types */
import { CiCreditCard2 } from "react-icons/ci";
import { FaMoneyBillTrendUp, FaCoins } from "react-icons/fa6";

const ContentLeft = () => {
  return (
    <section className="flex-1 p-14">
      <h3 className="text-2xl text-indigo-800">Welcome Back Boss!</h3>
      <div className="mt-10 flex flex-row gap-10">
        <Card
          bgColor={"bg-green-600"}
          txtColor={"text-black"}
          icon={<FaCoins size={25} />}
          label={<span className="text-sm">Total Income</span>}
        />
        <Card
          bgColor={"bg-red-600"}
          txtColor={"text-black"}
          icon={<FaMoneyBillTrendUp size={25} />}
          label={<span className="text-sm">Total Outcome</span>}
        />
        <Card
          bgColor={"bg-green-600"}
          txtColor={"text-black"}
          icon={<CiCreditCard2 size={25} />}
          label={<span className="text-sm">Total Income</span>}
        />
      </div>
    </section>
  );
};

export default ContentLeft;

const Card = (props) => {
  return (
    <div
      className={`rounded ${props.bgColor} ${props.txtColor} bg-opacity-10 p-5 w-56`}
    >
      {props.icon}
      {props.label}
    </div>
  );
};
