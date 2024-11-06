import { useEffect, useState } from "react";
import axios from "axios";

// Icon
import { LuView } from "react-icons/lu";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";

export const ListInvoice = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices();
  }, []);

  const getInvoices = async () => {
    const response = await axios.get("http://localhost:5000/invoices");
    setInvoices(response.data);
  };

  return (
    <table className="w-full">
      <thead className="text-left text-[#535353]">
        <tr>
          <th className="p-3">No</th>
          <th className="p-3">Client</th>
          <th className="p-3">Date</th>
          <th className="p-3 text-right">Total</th>
          <th className="p-3 text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice, index) => {
          return (
            <tr key={invoice._id} className="h-10 rounded shadow">
              <td className="px-3 text-xs">{index + 1}</td>
              <td className="px-3 text-xs">{invoice.client}</td>
              <td className="px-3 text-xs">{invoice.date}</td>
              <td className="px-3 text-xs text-right">{invoice.total}</td>
              <td className="px-3 text-xs text-right">
                <button>
                  <LuView size={20} />
                </button>
                <button className="mx-3">
                  <MdModeEditOutline size={20} />
                </button>
                <button>
                  <MdDeleteOutline size={20} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
