import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Modal } from ".";
import InvoicePdf from "@components/Templates/Pdf/InvoicePdf";

export const ModalInvoice = ({
  openModalInvoice,
  setOpenModalInvoice,
  dataOrderById,
}) => {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `Invoicei#${dataOrderById.orderNumber}`,
    pageStyle: `@media print {
      @page {
        size: A4;
        height: 100vh;
        margin: 30px 0;
        padding: 10px;
      }
    }`,
  });

  return (
    <Modal
      openModal={openModalInvoice}
      onCloseModal={() => setOpenModalInvoice(false)}
    >
      <div className="flex flex-col max-w-72 lg:max-w-[850px] lg:h-[800px]">
        {/* Head Modal Invoice Start */}
        <h2 className="text-primary_100">#{dataOrderById.orderNumber}</h2>
        {/* Head Modal Invoice End */}

        {/* Content Modal Invoice Start */}
        <div className="overflow-y-auto">
          <InvoicePdf
            componentPrint={contentRef}
            dataOrderById={dataOrderById}
          />
        </div>
        {/* Content Modal Invoice End */}

        {/* Footer Modal Invoice Start */}
        <section className="flex justify-between mt-5">
          <button
            onClick={handlePrint}
            // disabled={!loader === false}
            className="text-primary_100"
          >
            <span>Download Invoice</span>
          </button>

          <button
            onClick={() => setOpenModalInvoice(false)}
            className="border-2 border-primary_100 text-primary_100 px-3 py-2 rounded"
          >
            Cancel
          </button>
        </section>
        {/* Footer Modal Invoice End */}
      </div>
    </Modal>
  );
};
