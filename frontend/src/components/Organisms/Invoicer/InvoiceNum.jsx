/* eslint-disable react/prop-types */
export const InvoiceNum = ({ invoiceNumber, invoiceDate }) => {
  return (
    <>
      {/* Invoice Detail Start */}
      <article className="text-xs text-right">
        <h2 className="font-semibold">Invoice Number: {invoiceNumber}</h2>
        <p>Invoice Date: {invoiceDate}</p>
      </article>
      {/* Invoice Detail End */}
    </>
  );
};
