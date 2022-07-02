const QRCode = require("./qr.js");

qr = QRCode.generate("123", {
  version: 3,
  ecclevel: "M",
  fillcolor: "#F2F2F2",
  textcolor: "#D13438",
  margin: 4,
  modulesize: 8,
});

