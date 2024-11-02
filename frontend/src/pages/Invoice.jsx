import { Invoicer } from "../components/Invoicer";

const Invoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="px-9 py-6 w-full">
      <div className="border flex justify-between items-center lg:max-w-4xl lg:mx-auto">
        <h3 className="text-xl uppercase">Invoice</h3>
        <div>
          <button className="border p-2 rounded hover:bg-gray-100 mr-3">
            New Invoice
          </button>
          <button
            onClick={handlePrint}
            className="border p-2 rounded hover:bg-gray-100"
          >
            Print
          </button>
        </div>
      </div>
      <Invoicer />
    </div>
  );
};

export default Invoice;
