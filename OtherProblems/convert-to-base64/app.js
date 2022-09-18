const solveit = (str) => {
  let keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let bin = "";
  for (let i = 0; i < str.length; i++) {
    bin += str[i].charCodeAt(0).toString(2).padStart(8, 0);
  }
  console.log(bin);
  let res = "";
  for (let i = 0; i < bin.length; i += 6) {
    let chunk = bin.slice(i, i + 6);
    // console.log({ chunk: chunk.padStart(6, 0) });
    let num = parseInt(chunk.padEnd(6, 0), 2);
    res += keyStr[num];
  }

  let data = str;
  let buff = new Buffer(data);
  let base64data = buff.toString("base64");

  console.log("me>> ", res);
  console.log("node>> ", base64data);
};

solveit("DEF");
console.log("start: ", String.fromCharCode(parseInt("01100011", 2)));
console.log("end: ", String.fromCharCode(parseInt("11000110", 2)));
