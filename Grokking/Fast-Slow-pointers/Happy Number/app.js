const sumSqure = (arg) => {
  let num = arg;
  let res = 0;
  while (num > 0) {
    let rdigit = num % 10;
    res += rdigit * rdigit;
    num = Math.floor(num / 10);
  }

  return res;
};

const solve = (num) => {
  let p1 = sumSqure(num);
  let p2 = sumSqure(num);
  while (p2 != 1) {
    p1 = sumSqure(p1);
    p2 = sumSqure(sumSqure(p2));

    if (p1 == p2) return false;
  }

  return true;
};

console.log(solve(12));
