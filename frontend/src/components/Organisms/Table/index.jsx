import { TableDataItems } from "./TableDataItems";
import { Modal } from "../Modal";
import { useState } from "react";

export const Table = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-col h-64 overflow-y-scroll scroll-smooth">
      <table className="w-full cursor-default">
        <thead>
          <tr className="border border-solid border-x-0">
            <th className="text-md px-3 md:px-6 py-3 font-semibold text-[#535353]">
              Name
            </th>
            <th className="text-md px-3 md:px-6 py-3 font-semibold text-[#535353]">
              Date
            </th>
            <th className="text-md px-3 md:px-6 py-3 font-semibold text-[#535353]">
              Number
            </th>
            <th className="text-md px-3 md:px-6 py-3 font-semibold text-[#535353]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {TableDataItems.map((item) => (
            <tr key={item.id} className="border-b hover:bg-[#f5f7f9]">
              <td className="text-sm px-3 md:px-6 py-3">{item.name}</td>
              <td className="text-sm px-3 sm:px-6 py-3">{item.date}</td>
              <td className="text-sm px-3 sm:px-6 py-3">{item.number}</td>
              <td className="text-sm px-3 sm:px-6 py-3 text-center">
                <button onClick={() => setOpen(true)}>{item.icon}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal openModal={open} onCloseModal={() => setOpen(false)}>
        <div className="w-80 h-80 m-5 bg-white">WKWK</div>
      </Modal>
    </div>
  );
};
