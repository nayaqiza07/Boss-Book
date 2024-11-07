/* eslint-disable react/prop-types */
export const ClientDetailInvoice = ({ client, address }) => {
  return (
    <>
      {/* Client Detail Start */}
      <div>
        <h2 className="font-semibold">Ditagih Kepada:</h2>
        <p>{client}</p>
        <p>{address}</p>
      </div>
      {/* Client Detail End */}
    </>
  );
};
