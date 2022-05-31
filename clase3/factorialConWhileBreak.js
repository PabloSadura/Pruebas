// factorial con while if break

let n = 10;
let total = 1;

while (true) {
  if (n > 0) {
    total *= n;
    console.log(total);
    n--;
  } else {
    break;
  }
}
