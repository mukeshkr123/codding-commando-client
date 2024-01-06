export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

export const formatCreatedAtDate = (createdAt) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Date(createdAt).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};
