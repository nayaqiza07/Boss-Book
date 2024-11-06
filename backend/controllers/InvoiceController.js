import Invoice from "../models/InvoiceModel.js";

// Read
export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find Invoice By Id
export const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    res.json(invoice);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add Invoice
export const saveInvoice = async (req, res) => {
  const invoice = new Invoice(req.body);
  try {
    const insertedInvoice = await invoice.save();
    res.status(201).json(insertedInvoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Invoice
export const updateInvoice = async (req, res) => {
  try {
    const updatedInvoice = await Invoice.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedInvoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Invoice
export const deleteInvoice = async (req, res) => {
  try {
    const deletedInvoice = await Invoice.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedInvoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
