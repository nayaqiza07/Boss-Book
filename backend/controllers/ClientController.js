import Client from "../models/ClientModel.js";

// Get Client
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find Client By Id
export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add Client
export const saveClient = async (req, res) => {
  const client = new Client(req.body);
  try {
    const insertedClient = await client.save();
    res.status(201).json(insertedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Client
export const updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Client
export const deleteClient = async (req, res) => {
  try {
    const deletedClient = await Client.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
