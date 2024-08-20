export const calculateTotalQuantity = (details) => {
  return details.reduce((sum, detail) => sum + detail.quantity, 0);
};

export const calculateTotalPrice = (details) => {
  return details.reduce((sum, detail) => {
    const price = parseInt(detail.price.replace(/[₩,]/g, ""));
    return sum + price * detail.quantity;
  }, 0);
};
