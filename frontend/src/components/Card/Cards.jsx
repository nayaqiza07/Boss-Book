import { Bag, Location, User2 } from "../Icon/Icon";
import { SelectMenuMonth } from "../Select/SelectMenu";

const Cards = ({ type, name, email, phone, address }) => {
  let data;

  switch (type) {
    case "client":
      data = {
        icon: (
          <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
            <User2 colorStroke={"#130F26"} />
          </div>
        ),
        text1: <h6 className="text-night_30 text-sm">{name}</h6>,
        text2: <h6 className="text-night_30 text-xs">Phone</h6>,
        val2: (
          <span className="text-night_60 text-sm font-medium">{phone}</span>
        ),
        text3: <h6 className="text-night_30 text-xs">Email</h6>,
        val3: (
          <span className="text-night_60 text-sm font-medium">{email}</span>
        ),
      };
      break;
    case "address":
      data = {
        icon: (
          <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
            <Location colorStroke={"#130F26"} />
          </div>
        ),
        text1: false,
        text2: <h6 className="text-night_30 text-xs">Home Address</h6>,
        val2: (
          <span className="text-night_60 text-sm font-medium">{address}</span>
        ),
        text3: <h6 className="text-night_30 text-xs">Billing Address</h6>,
        val3: (
          <span className="text-night_60 text-sm font-medium">{address}</span>
        ),
      };
      break;
    case "order":
      data = {
        icon: (
          <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
            <Bag colorStroke={"#130F26"} />
          </div>
        ),
        text2: <h6 className="text-night_30 text-xs">All Order</h6>,
        val2: <span className="text-night_60 text-sm font-medium">0</span>,
        text3: <h6 className="text-night_30 text-xs">Pending</h6>,
        val3: <span className="text-night_60 text-sm font-medium">0</span>,
        text4: <h6 className="text-night_30 text-xs">In-Progress</h6>,
        val4: <span className="text-night_60 text-sm font-medium">0</span>,
        text5: <h6 className="text-night_30 text-xs">Completed</h6>,
        val5: <span className="text-night_60 text-sm font-medium">0</span>,
        filter: <SelectMenuMonth />,
        colSpan: false,
      };
      break;
    case "table":
      data = {
        text1: <p className="text-night_60 font-medium">{name} Order</p>,
        filter: false,
        colSpan: "lg:col-span-3",
      };
      break;

    default:
      break;
  }

  return (
    <div className={`bg-white rounded-xl px-[15px] py-[11px] ${data.colSpan}`}>
      <div className="flex justify-between">
        <div className="flex gap-6">
          {data.icon}
          {data.text1}
        </div>
        {data.filter}
      </div>

      <div className="flex flex-row justify-between mt-7">
        <div>
          {data.text2}
          {data.val2}
        </div>
        <div>
          {data.text3}
          {data.val3}
        </div>
        <div>
          {data.text4}
          {data.val4}
        </div>
        <div>
          {data.text5}
          {data.val5}
        </div>
      </div>
    </div>
  );
};

export default Cards;
