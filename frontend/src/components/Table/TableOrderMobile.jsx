import Button from "../Button/Button";
import { priceFormat } from "../utils";

const TableOrderMobile = ({
  orders,
  search,
  handleModalInvoice,
  handleModalUpdateOrder,
}) => {
  return (
    <>
      {orders
        .filter((order) => {
          return search.toLowerCase() === ""
            ? order
            : order.orderNumber.toLowerCase().includes(search);
        })
        .map((order) => (
          <div
            key={order._id}
            className="p-3 border border-[#E1E2E9] rounded-lg"
          >
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center">
                <h1 className="font-medium text-night_40 text-sm">
                  {order.clientData.map((client) => (
                    <span key={client._id}>{client.name}</span>
                  ))}
                </h1>
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
              <Button
                variant="primary"
                size="xs"
                className="transition-all hover:scale-105"
                onClick={() => handleModalUpdateOrder(order._id)}
              >
                Update
              </Button>
            </div>
            <div className="text-night_20 text-xs">
              <p
                onClick={() => handleModalInvoice(order._id)}
                className="text-primary_100 text-sm mt-1"
              >
                {order.orderNumber}
              </p>
              <p className="text-night_30 text-sm mt-1">
                {order.clientData.map((client) => (
                  <span key={client._id}>{client.address}</span>
                ))}
              </p>
              <p className="mt-1">{order.date}</p>
              <p className="mt-1">{priceFormat(order.total)}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default TableOrderMobile;
