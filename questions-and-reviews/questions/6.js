function printTimesTables(n) {
  let count = 1;
  while (count <= 12) {
    let i = count;
    const product = n * i;
    console.log(`${i} * ${n} = ${product}`);
    count++;
  }
}

printTimesTables(5);
