import Transaction from "../models/TransactionModel.js";

// Read
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find Transaction By Id
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.json(transaction);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add Transaction
export const saveTransaction = async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    const insertedTransaction = await transaction.save();
    res.status(201).json(insertedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Transaction
export const updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Transaction
export const deleteTransaction = async (req, res) => {
  try {
    const deletedTransaction = await Transaction.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deletedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
