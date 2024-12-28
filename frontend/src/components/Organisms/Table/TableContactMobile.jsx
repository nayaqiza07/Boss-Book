import { Link } from "react-router-dom";
import Button from "@components/Atoms/Button/Button";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { User } from "react-iconly";

const TableContactMobile = ({ dataClients }) => {
  return (
    <>
      {dataClients.length === 0 ? (
        <DataEmpty
          icon={<User set="bulk" size={60} primaryColor="#bec0ca" />}
        />
      ) : (
        dataClients.map((client, index) => (
          <div
            key={index + 1}
            className="p-3 border border-[#E1E2E9] rounded-lg"
          >
            <div className="flex justify-between">
              <h1 className="font-medium text-night_40">{client.name}</h1>
              <Link to={`view/${client._id}`}>
                <Button
                  variant="primary_2"
                  size="xs"
                  className="transition-all hover:scale-105"
                >
                  View
                </Button>
              </Link>
            </div>
            <div className="text-night_20 text-xs">
              <p className="text-night_30 text-sm mt-1">{client.address}</p>
              <p className="mt-1">{client.email}</p>
              <p className="mt-1">{client.phone}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default TableContactMobile;
