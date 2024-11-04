/* eslint-disable react/prop-types */
export const ClientDetailInvoice = ({ clientName, clientAdress }) => {
  return (
    <>
      {/* Client Detail Start */}
      <div>
        <h2 className="font-semibold">Ditagih Kepada:</h2>
        <p>{clientName}</p>
        <p>{clientAdress}</p>
      </div>
      {/* Client Detail End */}
    </>
  );
};
