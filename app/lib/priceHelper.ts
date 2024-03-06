export const pesoFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "Php",
});

export const applyDiscount = (price: string, discount: number): number => {
  return (toNumber(price) * (1 - discount))
};

export const toNumber = (price: string) => {
  return parseFloat(price.replace(/,/, ""));
};
