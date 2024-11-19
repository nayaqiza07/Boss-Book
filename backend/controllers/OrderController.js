import Order from "../models/OrderModel.js";

// GET Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Order by Id
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// POST
export const saveOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const insertedOrder = await order.save();
    res.status(200).json(insertedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE
export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.deleteOne({ _id: req.params.id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
