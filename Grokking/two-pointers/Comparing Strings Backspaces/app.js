const solve = (str1, str2) => {
  let p1 = str1.length - 1,
    p2 = str2.length - 1;

  while (p1 >= 0 && p2 >= 0) {
    let sc1 = 0;
    let sc2 = 0;
    while (str1[p1] == "#") {
      p1 -= 1;
      sc1 += 1;
    }
    while (str2[p2] == "#") {
      p2 -= 1;
      sc2 += 1;
    }
    p1 -= sc1;
    p2 -= sc2;
    if (str1[p1] !== str2[p2]) return false;
    p1--;
    p2--;
  }
  return p1 == p2;
};

console.log(solve((str1 = "xy#z"), (str2 = "xzz#")));
console.log(solve((str1 = "xy#z"), (str2 = "xyz#")));

console.log(solve((str1 = "xp#"), (str2 = "xyz##")));
console.log(solve((str1 = "xywrrmp"), (str2 = "xywrrmu#p")));
