function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = 'admin1';
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
