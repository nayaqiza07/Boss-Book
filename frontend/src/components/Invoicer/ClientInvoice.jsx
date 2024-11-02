/* eslint-disable react/prop-types */
export const ClientDetailInvoice = ({ clientName, clientAdress }) => {
  return (
    <>
      {/* Client Detail Start */}
      <div>
        <h2 className="font-semibold">{clientName}</h2>
        <p>{clientAdress}</p>
      </div>
      {/* Client Detail End */}
    </>
  );
};
