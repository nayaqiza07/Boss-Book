import Order from "../../../../backend/models/orderModel";

export const priceFormat = (price) => {
  const rupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
  return rupiahFormat;
};

export const generateOrderNumber = async () => {
  try {
    // Mengambil data order terakhir
    const lastOrder = await Order.findOne({ _id: -1 });

    // Ekstrak bagian numerik dari nomor order
    let lastOrderNumber = 0;
    if (lastOrder) {
      const regex = /\d+/;
      const match = lastOrder.orderNumber.match(regex);
      lastOrderNumber = parseInt(match[0]);
    }

    // Increment dan buar nomor order baru
    const newNumber = lastOrderNumber + 1;
    const paddedNumber = newNumber.toString().padStart(4, "0");
    const prefix = "GGR";
    const orderNumber = prefix + paddedNumber;

    return orderNumber;
  } catch (error) {
    console.log(error);
  }
};
