import { useState } from "react";
import { ListInvoice } from "../components/Invoicer/ListInvoice";
import { CiSearch, CiCirclePlus } from "react-icons/ci";
import { DrawerInvoice } from "../components/Drawer/DrawerInvoice";

const Invoice = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-9 py-6 w-full">
      <div className="flex justify-between items-center lg:max-w-4xl lg:mx-auto">
        <h3 className="text-xl uppercase">Invoice</h3>
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="flex gap-1 border p-2 rounded bg-primary text-white hover:bg-primary1 transition-colors"
          >
            <CiCirclePlus size={20} className="place-self-center" />
            New Invoice
          </button>
        </div>
      </div>

      {/* Drawer Invoice Start */}
      <div>
        <DrawerInvoice open={open} onClose={() => setOpen(!open)} />
      </div>
      {/* Drawer Invoice End */}

      <div className="flex justify-between my-5 lg:max-w-4xl lg:mx-auto gap-5">
        <div className="flex border w-full border-gray-300 items-center bg-white rounded">
          <CiSearch size={20} className="ml-3" />
          <input
            type="search"
            placeholder="Search an Invoice"
            className="ml-3 focus:outline-none w-full"
          />
        </div>
        <button className="border rounded p-1">Show</button>
      </div>
      <div className="lg:max-w-4xl lg:mx-auto my-5">
        <ListInvoice open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Invoice;
