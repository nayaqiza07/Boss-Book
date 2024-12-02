import { Link } from "react-router-dom";

const TableClientMobile = ({ dataClients, search }) => {
  return (
    <>
      {dataClients
        .filter((client) => {
          return search.toLowerCase() === ""
            ? client
            : client.name.toLowerCase().includes(search);
        })
        .map((client, index) => (
          <div
            key={index + 1}
            className="p-3 border border-[#E1E2E9] rounded-lg"
          >
            <div className="flex justify-between">
              <h1 className="font-medium text-night_40">{client.name}</h1>
              <Link to={`view/${client._id}`}>
                <button className="rounded px-3 py-1 bg-[#97a5eb]/20 text-primary_100 text-xs transition-all hover:scale-110">
                  View
                </button>
              </Link>
            </div>
            <div className="text-night_20 text-xs">
              <p className="text-night_30 text-sm mt-1">{client.address}</p>
              <p className="mt-1">{client.email}</p>
              <p className="mt-1">{client.phone}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default TableClientMobile;
