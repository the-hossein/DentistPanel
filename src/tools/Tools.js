export const PersionDate =  (d) => {
  var timestamp = new Date(d.split("T")[0]).getTime();
  var p = SetDate(timestamp / 1000);
 
  return p;
};
export const SetDate = (timestamp) => {
  let options = { year: "numeric", month: "long", day: "numeric" };
  var data2 = null;
  data2 = new Date(timestamp * 1000).toLocaleDateString("fa-IR", options);
  return data2;
};
export const PersionCurrency = (p) => {
  var a = new Intl.NumberFormat("fa-IN", {
    maximumSignificantDigits: 3
  }).format(p);
  return a;
};
export const PersianNumber = (s) => s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
