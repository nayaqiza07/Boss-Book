export const priceFormat = (price) => {
  const rupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
  return rupiahFormat;
};
