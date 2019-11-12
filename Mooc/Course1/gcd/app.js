// Finding the greatest common divisor

const gcd = (a, b) => {
    if (b == 0) return a;
    const a1 = a % b;
    return gcd(b, a1);
}

console.log(gcd(3918848, 1653264))
console.log(gcd(357, 234))


