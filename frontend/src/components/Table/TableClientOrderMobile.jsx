import { priceFormat } from "../utils";

const TableClientOrderMobile = ({ clientOrder, handleModalInvoice }) => {
  return (
    <>
      {clientOrder.map((order) => (
        <div key={order._id} className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-night_40">{order.orderNumber}</h1>
            <span
              className={`px-3 text-xs py-1 rounded w-fit ml-3 ${
                order.status === "Completed"
                  ? "bg-[#519c66]/20 text-action_go"
                  : order.status === "In-Progress"
                  ? "bg-[#5570F1]/20 text-primary_100"
                  : "bg-[#cc5f5f]/20 text-action_stop"
              }`}
            >
              {order.status}
            </span>
          </div>
          <div className="text-night_20 text-xs">
            <p
              onClick={() => handleModalInvoice(order._id)}
              className="text-primary_100 text-sm mt-1"
            >
              {order.no}
            </p>
            <p className="text-night_30 text-sm mt-1">{order.address}</p>
            <p className="mt-1">{order.date}</p>
            <p className="mt-1">{priceFormat(order.total)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TableClientOrderMobile;
