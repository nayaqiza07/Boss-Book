import { Link } from "react-router-dom";
import { EditSquare } from "../Icon/Icon";

const TableClientMobile = ({ clients }) => {
  return (
    <>
      {clients.map((client, index) => (
        <div key={index + 1} className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between">
            <h1 className="font-medium text-night_40">{client.name}</h1>
            <Link to={`view/${client._id}`}>
              <button className="rounded-lg p-1 bg-[#97a5eb]/20 transition-all hover:scale-110">
                <EditSquare colorStroke={"#5570f1"} />
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
