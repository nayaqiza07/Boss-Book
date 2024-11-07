/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ClientDetailInvoice } from "./ClientInvoice";
import { HeaderInvoice } from "./HeaderInvoice";
import { InvoiceNum } from "./InvoiceNum";
import { TableInvoice } from "./TableInvoice";
import { YourDetailInvoice } from "./YourDetailInvoice";
import { NotesInvoice } from "./NotesInvoice";
import { Modal } from "../Modal";
import axios from "axios";
// import {useParams} from 'react-router-dom'

export const Invoicer = ({ showInvoice, setShowInvoice }) => {
  // For Table Start
  const [item, setItem] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const [List] = useState([]);
  const addData = () => {
    List.push({
      item: item,
      note: note,
      quantity: quantity,
      price: price,
    });
    console.log(List);
    setItem("");
    setNote("");
    setQuantity("");
    setPrice("");
  };

  let sum = 0;
  List.forEach((price) => {
    sum += parseInt(price.price);
  });
  // For Table End

  // const { id } = useParams();

  const [client, setClient] = useState("");
  const [address, setAddress] = useState("");
  const [total, setTot] = useState(0);
  const showDate = new Date();
  const date =
    ("0" + showDate.getDate()).slice(-2) +
    "/" +
    ("0" + (showDate.getMonth() + 1)).slice(-2) +
    "/" +
    showDate.getFullYear();

  // useEffect(() => {
  //   getInvoiceById();
  // }, []);

  // const getInvoiceById = async (id) => {
  //   const response = await axios.get(`http://localhost:5000/invoices/${id}`);
  //   setClient(response.data.client);
  //   setAddress(response.data.address);
  //   setTot(response.data.total);
  // };

  const saveInvoice = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/invoices", {
        client,
        address,
        date,
        total,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="p-3 lg:max-w-4xl lg:mx-auto">
      {/* Input Invoice Start */}
      <form onSubmit={saveInvoice}>
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded p-1 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-xs">
              Date
            </label>
            <input
              type="text"
              name="text"
              id="date"
              readOnly={true}
              value={date}
              className="border rounded p-1 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-xs">
              total
            </label>
            <input
              type="text"
              name="text"
              id="total"
              value={total}
              onChange={(e) => setTot(e.target.value)}
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
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
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
                  value={sum}
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
                Rp. {sum}
              </td>
            </tr>
          </tbody>
        </table>
        {/* Add Product Invoice Start */}
        <button type="submit" className="rounded border p-1">
          simpan
        </button>
      </form>
      {/* Input Invoice End */}

      {/* Show Invoice Start */}
      {showInvoice && (
        <Modal open={showInvoice} onClose={() => setShowInvoice(false)}>
          <div className="border rounded shadow p-5 w-3/4 mx-auto">
            <HeaderInvoice />
            <YourDetailInvoice />

            <section className="flex flex-row justify-between text-xs">
              <ClientDetailInvoice client={client} address={address} />
              <InvoiceNum
                // invoiceNumber={invoiceNumber}
                invoiceDate={date}
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
