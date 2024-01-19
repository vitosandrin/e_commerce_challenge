export const isMonetaryValue = (value: string | number) =>
  typeof value === "string" && /^\s*(R\$\s*)?[0-9,.]+$/.test(value);

export const parseMonetaryValue = (value: string) => {
  const numericValue = value.replace(/[^0-9,-]+/g, "").replace(",", ".");
  return parseFloat(numericValue);
};

export const formatMonetaryEn = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
