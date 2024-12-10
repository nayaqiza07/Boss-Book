import { Link } from "react-router-dom";
import { Checkbox } from "@components/Atoms/Checkbox/Checkbox";
import Button from "@components/Atoms/Button/Button";

const TableClient = ({ dataClients }) => {
  return (
    <>
      <table className="w-full">
        <thead className="border-b border-t border-[#E1E2E9]">
          <tr className="text-left text-sm text-night_90">
            <th className="py-3">
              <Checkbox />
            </th>
            <th className="font-normal px-6 py-3">Name</th>
            <th className="font-normal px-6 py-3 hidden sm:table-cell">
              Address
            </th>
            <th className="font-normal px-6 py-3 hidden md:table-cell">
              Email
            </th>
            <th className="font-normal px-6 py-3 hidden xl:table-cell">
              Phone
            </th>
            <th className="font-normal px-6 py-3 hidden sm:table-cell">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="border-b border-[#E1E2E9]">
          {dataClients
            // .filter((client) => {
            //   return search.toLowerCase() === ""
            //     ? client
            //     : client.name.toLowerCase().includes(search);
            // })
            .map((client) => (
              <tr key={client._id} className="text-night_40 text-left text-sm">
                <td className="py-2.5">
                  <Checkbox />
                </td>
                <td className="whitespace-nowrap px-6 py-2.5 w-full max-w-0 sm:w-auto sm:max-w-none">
                  {client.name}

                  {/* Stack Table Start */}
                  <dl className="xl:hidden">
                    <dt className="sr-only">Phone</dt>
                    <dd className="text-night_20 text-xs mt-1 truncate">
                      {client.phone}
                    </dd>
                  </dl>
                  {/* Stack Table End */}
                </td>
                <td className="whitespace-nowrap  px-6 py-2.5 hidden sm:table-cell">
                  {client.address}
                </td>
                <td className="whitespace-nowrap px-6 py-2.5 hidden md:table-cell">
                  {client.email}
                </td>
                <td className="whitespace-nowrap px-6 py-2.5 hidden xl:table-cell">
                  {client.phone}
                </td>
                <td className="whitespace-nowrap px-6 py-2.5 hidden sm:table-cell">
                  <Link to={`view/${client._id}`}>
                    <Button
                      variant="primary_2"
                      size="sm"
                      className="transition-all hover:scale-105"
                    >
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TableClient;
