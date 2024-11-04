import { useState } from "react";
import { Invoicer } from "../components/Invoicer";
import { Modal } from "../components/Modal";

const Invoice = () => {
  const [open, setOpen] = useState(false);

  // const handlePrint = () => {
  //   window.print();
  // };

  return (
    <div className="px-9 py-6 w-full">
      <div className="border flex justify-between items-center lg:max-w-4xl lg:mx-auto">
        <h3 className="text-xl uppercase">Invoice</h3>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="border p-2 rounded hover:bg-gray-100 mr-3"
          >
            New Invoice
          </button>
        </div>
      </div>
      <Modal open={open} onCLose={() => setOpen(false)}>
        <div className="mt-5 w-full">
          <Invoicer />
        </div>
        {/* <button
          onClick={handlePrint}
          className="border p-2 rounded hover:bg-gray-100"
        >
          Print
        </button> */}
      </Modal>
    </div>
  );
};

export default Invoice;
