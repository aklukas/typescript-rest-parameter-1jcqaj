function x(...a) {
  for (let i of a) {
    if (i > 5) return true;
  }
  return false;
}
// NOTE: Having no idea how many numbers are going to be in the source array or what they are. You just need to know that at least one of them is over 5.
console.log(x(5, 25, 4));
