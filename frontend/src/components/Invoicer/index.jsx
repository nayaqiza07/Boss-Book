import { useState, useRef } from "react";
import { ClientDetailInvoice } from "./ClientInvoice";
import { HeaderInvoice } from "./HeaderInvoice";
import { InvoiceNum } from "./InvoiceNum";
import { TableInvoice } from "./TableInvoice";
import { YourDetailInvoice } from "./YourDetailInvoice";
import { NotesInvoice } from "./NotesInvoice";
import { useReactToPrint } from "react-to-print";

export const Invoicer = () => {
  // For Table Start
  const [showAddProduct, setShowAddProducts] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [List] = useState([]);
  const addData = () => {
    List.push({
      name: name,
      note: note,
      quantity: quantity,
      price: price,
    });
    console.log(List);
    setName("");
    setNote("");
    setQuantity("");
    setPrice("");
    setShowAddProducts(false);
  };
  // For Table End

  const [showInvoice, setShowInvoice] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  const contentRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: () => contentRef.current,
  });

  return (
    <main className="p-5 lg:max-w-4xl lg:mx-auto">
      {showInvoice ? (
        <div>
          <div ref={contentRef}>
            <h1>ini di print</h1>
          </div>
          <button
            onClick={() => handlePrint()}
            className="border rounded p-1 hover:bg-gray-100 my-3"
          >
            Print
          </button>
          <div className="border rounded shadow p-5">
            <HeaderInvoice />
            <YourDetailInvoice />

            <section className="flex flex-row justify-between text-xs">
              <ClientDetailInvoice
                clientName={clientName}
                clientAdress={clientAddress}
              />
              <InvoiceNum
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
              />
            </section>

            {/* Table Product Start */}
            <div className="my-7">
              <TableInvoice List={List} />
            </div>
            {/* Table Product End */}

            <NotesInvoice />
          </div>

          <button
            onClick={() => setShowAddProducts(!showAddProduct)}
            className="border rounded p-1 hover:bg-gray-100 my-3"
          >
            Add Product
          </button>
          {showAddProduct && (
            <div>
              <input
                type="text"
                placeholder="Product"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded p-1"
              />
              <input
                type="text"
                placeholder="Keterangan"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="border rounded p-1"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border rounded p-1"
              />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border rounded p-1"
              />
              <button
                onClick={addData}
                className="border rounded p-1 hover:bg-gray-100 my-3"
              >
                Add
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center gap-">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="clientName">Client Name</label>
                <input
                  type="text"
                  name="text"
                  id="website"
                  placeholder="Enter Your Client Name"
                  autoComplete="off"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="border rounded p-1"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="clientAddress">Client Address</label>
                <input
                  type="text"
                  name="text"
                  id="clientAddress"
                  placeholder="Enter Your Client Adress"
                  autoComplete="off"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  className="border rounded p-1"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between gap-3 my-3">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="text"
                    id="invoiceNumber"
                    placeholder="Enter Your invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="border rounded p-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="text"
                    name="text"
                    id="invoiceDate"
                    placeholder="Enter Your invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    className="border rounded p-1"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowInvoice(true)}
              className="border rounded p-3 hover:bg-gray-100"
            >
              Preview
            </button>
          </div>
        </>
      )}
    </main>
  );
};
