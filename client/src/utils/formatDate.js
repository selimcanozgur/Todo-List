const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default formatDate;
