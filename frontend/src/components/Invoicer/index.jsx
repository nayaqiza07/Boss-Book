import { useState } from "react";
import { ClientDetailInvoice } from "./ClientInvoice";
import { HeaderInvoice } from "./HeaderInvoice";
import { InvoiceNum } from "./InvoiceNum";
import { TableInvoice } from "./TableInvoice";
import { YourDetailInvoice } from "./YourDetailInvoice";
import { NotesInvoice } from "./NotesInvoice";

export const Invoicer = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  return (
    <main className="border p-5 lg:max-w-4xl lg:mx-auto rounded shadow">
      {showInvoice ? (
        <div className="h-screen">
          <HeaderInvoice />
          <YourDetailInvoice
            name={name}
            address={address}
            phone={phone}
            email={email}
            website={website}
          />

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
            <TableInvoice />
          </div>
          {/* Table Product End */}

          <NotesInvoice />
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="text"
              id="name"
              placeholder="Enter Your Name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="address">Your Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Your Adress"
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="name">Your Phone</label>
            <input
              type="text"
              name="text"
              id="phone"
              placeholder="Enter Your Phone"
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="text"
              id="email"
              placeholder="Enter Your Email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="website">Your Website</label>
            <input
              type="text"
              name="text"
              id="website"
              placeholder="Enter Your Website"
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="bankName">Your Bank Name</label>
            <input
              type="text"
              name="text"
              id="bankName"
              placeholder="Enter Your Bank Name"
              autoComplete="off"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="bankAccount">Your Bank Account</label>
            <input
              type="text"
              name="text"
              id="bankAccount"
              placeholder="Enter Your Bank Account"
              autoComplete="off"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="clientName">Your Client Name</label>
            <input
              type="text"
              name="text"
              id="website"
              placeholder="Enter Your Client Name"
              autoComplete="off"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="border rounded"
            />
            <label htmlFor="clientAddress">Your Client Address</label>
            <input
              type="text"
              name="text"
              id="clientAddress"
              placeholder="Enter Your Client Adress"
              autoComplete="off"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="invoiceNumber">Your Invoice Number</label>
            <input
              type="text"
              name="text"
              id="invoiceNumber"
              placeholder="Enter Your invoice Number"
              autoComplete="off"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="border rounded"
            />

            <label htmlFor="invoiceDate">Your Invoice Date</label>
            <input
              type="text"
              name="text"
              id="invoiceDate"
              placeholder="Enter Your invoice Date"
              autoComplete="off"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="border rounded"
            />

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
