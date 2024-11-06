/* eslint-disable react/prop-types */
export const ClientDetailInvoice = ({ client, clientAdress }) => {
  return (
    <>
      {/* Client Detail Start */}
      <div>
        <h2 className="font-semibold">Ditagih Kepada:</h2>
        <p>{client}</p>
        <p>{clientAdress}</p>
      </div>
      {/* Client Detail End */}
    </>
  );
};
