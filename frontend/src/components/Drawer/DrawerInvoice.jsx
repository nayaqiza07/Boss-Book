/* eslint-disable react/prop-types */
import { Drawer, Box, Button } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { Invoicer } from "../Invoicer";
import { useState } from "react";

export const DrawerInvoice = ({ open, onClose }) => {
  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <div>
      <Box>
        <Drawer anchor="right" open={open} sx={{ width: 250 }}>
          <div className="flex justify-between p-3">
            <h2>Create New Invoice</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-600"
            >
              <IoMdClose />
            </button>
          </div>
          <Invoicer showInvoice={showInvoice} setShowInvoice={setShowInvoice} />
          <div className="flex justify-between px-3">
            <Button variant="text" onClick={() => setShowInvoice(!showInvoice)}>
              Preview
            </Button>
            <Button variant="contained">Send</Button>
          </div>
        </Drawer>
      </Box>
    </div>
  );
};
