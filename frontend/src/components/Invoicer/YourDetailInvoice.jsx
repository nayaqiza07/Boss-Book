/* eslint-disable react/prop-types */
export const YourDetailInvoice = ({ name, address, phone, email, website }) => {
  return (
    <>
      {/* Your Detail Start */}
      <section className="text-right text-xs my-7">
        <h2 className="font-semibold">{name}</h2>
        <p>{address}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>
          <a href={website} target="_blank" rel="noopener noreferer">
            {website}
          </a>
        </p>
      </section>
      {/* Your Detail End */}
    </>
  );
};
