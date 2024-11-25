import { Checkbox } from "../Checkbox/Checkbox";
import { SelectMenuActions } from "../Select/SelectMenu";
import { priceFormat } from "../utils";

const TableClientOrder = ({ clientOrder }) => {
  return (
    <table className="w-full">
      <thead className="border-b border-t border-[#E1E2E9]">
        <tr className="text-left text-sm text-night_90">
          <th className="py-3">
            <Checkbox />
          </th>
          <th className="font-normal px-6 py-3">Order Number</th>
          <th className="font-normal px-6 py-3 hidden xl:table-cell">Date</th>
          <th className="font-normal px-6 py-3 hidden md:table-cell">Total</th>
          <th className="font-normal px-6 py-3 hidden md:table-cell">Items</th>
          <th className="font-normal px-6 py-3 hidden md:table-cell">Action</th>
          <th className="font-normal px-6 py-3">Status</th>
        </tr>
      </thead>
      <tbody className="border-b border-[#E1E2E9]">
        {clientOrder.map((order) => (
          <tr key={order._id} className="text-night_40 text-left text-sm">
            <td className="py-3">
              <Checkbox />
            </td>

            <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
              <span
                // onClick={() => handleModalInvoice(order.orderNumber)}
                className="cursor-pointer "
              >
                {order.orderNumber}
              </span>

              {/* Stack Table Start */}
              <dl className="xl:hidden">
                <dt className="sr-only">Client Name</dt>
                <dd className="text-night_20 text-xs mt-1 truncate">
                  {/* {order.client} */}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd className="text-night_20 text-xs mt-1 truncate">
                  {order.date}
                </dd>
              </dl>
              {/* Stack Table End */}
            </td>
            <td className="whitespace-nowrap  px-6 py-3 hidden xl:table-cell">
              {order.date}
            </td>
            <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
              {priceFormat(order.total)}
            </td>
            <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
              {order.items.map((item) => (
                <p key={item._id}>{item.name}</p>
              ))}
            </td>
            <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
              <SelectMenuActions />
            </td>
            <td className="whitespace-nowrap px-6 py-3">
              <p
                className={`px-5 py-1 rounded w-fit ${
                  order.status === "Completed"
                    ? "bg-[#519c66]/20 text-action_go"
                    : order.status === "In-Progress"
                    ? "bg-[#5570F1]/20 text-primary_100"
                    : "bg-[#cc5f5f]/20 text-action_stop"
                }`}
              >
                {order.status}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableClientOrder;
