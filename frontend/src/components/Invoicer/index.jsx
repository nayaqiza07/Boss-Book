/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { ClientDetailInvoice } from "./ClientInvoice";
import { HeaderInvoice } from "./HeaderInvoice";
import { InvoiceNum } from "./InvoiceNum";
import { TableInvoice } from "./TableInvoice";
import { YourDetailInvoice } from "./YourDetailInvoice";
import { NotesInvoice } from "./NotesInvoice";

import { useReactToPrint } from "react-to-print";
import { Modal } from "../Modal";

export const Invoicer = ({ showInvoice, setShowInvoice }) => {
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

  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  // const [invoiceNumber, setInvoiceNumber] = useState("");
  // const [invoiceDate, setInvoiceDate] = useState("");

  const contentRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: () => contentRef,
  });

  return (
    <main className="p-3 lg:max-w-4xl lg:mx-auto">
      {/* Input Invoice Start */}
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

      <button
        onClick={() => setShowAddProducts(!showAddProduct)}
        className="border rounded p-1 hover:bg-gray-100 my-3"
      >
        Add Product
      </button>

      {/* Add Product Invoice Start */}
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
            className="border rounded p-1 w-10"
          />
          <input
            type="text"
            inputMode="numeric"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded p-1 w-16"
          />
          <button
            onClick={addData}
            className="border rounded p-1 hover:bg-gray-100 my-3"
          >
            Add
          </button>
        </div>
      )}
      {/* Add Product Invoice Start */}

      {/* Input Invoice End */}

      {/* Show Invoice Start */}
      {showInvoice && (
        <Modal open={showInvoice} onClose={() => setShowInvoice(false)}>
          <div ref={contentRef}>
            <h1>ini di print</h1>
          </div>
          <button
            onClick={() => handlePrint()}
            className="border rounded p-1 hover:bg-gray-100 my-3"
          >
            Print
          </button>
          <div className="border rounded shadow p-5 w-3/4 mx-auto">
            <HeaderInvoice />
            <YourDetailInvoice />

            <section className="flex flex-row justify-between text-xs">
              <ClientDetailInvoice
                clientName={clientName}
                clientAdress={clientAddress}
              />
              <InvoiceNum
              // invoiceNumber={invoiceNumber}
              // invoiceDate={invoiceDate}
              />
            </section>

            {/* Table Product Start */}
            <div className="my-7">
              <TableInvoice List={List} />
            </div>
            {/* Table Product End */}

            <NotesInvoice />
          </div>
        </Modal>
      )}
      {/* Show Invoice End */}
    </main>
  );
};
