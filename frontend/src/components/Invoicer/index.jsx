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
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  // Formated Price
  // const formatedPrice = () => {
  //   const removeChar = price.value.replace(/[^0-9\.]/g, "");
  // };

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
  };
  // For Table End

  const [client, setClient] = useState("");
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
      {/* <form action=""> */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="client" className="text-xs">
            Client
          </label>
          <input
            type="text"
            name="text"
            id="client"
            placeholder="Enter Your Client Name"
            autoComplete="off"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="border rounded p-1 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="clientAddress" className="text-xs">
            Client Address
          </label>
          <input
            type="text"
            name="text"
            id="clientAddress"
            placeholder="Enter Your Client Adress"
            autoComplete="off"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            className="border rounded p-1 focus:outline-none"
          />
        </div>
      </div>

      {/* Add Product Invoice Start */}
      <table className="mt-5">
        <thead className="h-6">
          <tr className="text-xs text-left">
            <th className="font-normal">Item</th>
            <th className="font-normal">Note</th>
            <th className="text-right font-normal">Qty</th>
            <th className="text-right font-normal">Price</th>
            <th className="text-right font-normal">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded p-1 w-32 mr-3 focus:outline-none"
              />
            </td>
            <td>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="border rounded p-1 w-32 focus:outline-none"
              />
            </td>
            <td>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border rounded p-1 w-10 ml-3 text-right focus:outline-none"
              />
            </td>
            <td>
              <input
                type="text"
                inputMode="numeric"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border rounded p-1 w-16 ml-3 text-right focus:outline-none"
              />
            </td>
            <td>
              <input
                type="text"
                value={quantity * price}
                readOnly={true}
                className="p-1 w-16 ml-3 text-right focus:outline-none cursor-default"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
                onClick={addData}
                className="text-xs font-semibold text-primary hover:text-primary1 p-1 my-3"
              >
                + ADD ITEM
              </button>
            </td>
            <td className="text-right font-normal text-xs p-1">Total</td>
            <td colSpan={2} className="text-right font-normal p-1">
              Rp. {quantity * price}
            </td>
          </tr>
        </tbody>
      </table>
      {/* Add Product Invoice Start */}
      {/* </form> */}
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
                clientName={client}
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
