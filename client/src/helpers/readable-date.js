const convertDateToReadable = (date) => {
  if (!date) {
    return;
  }
  const monthObj = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };
  date = date.split("/");
  date[1] = monthObj[date[1]];
  date[0] = date[0].charAt(0) === "0" ? date[0].slice(1) : date[0];
  date = date.join(" ");
  return date;
};

export default convertDateToReadable;