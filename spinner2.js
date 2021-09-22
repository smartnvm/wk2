let strSpinner = '|  /  -  \  |  /  -  \  |'
strSpinner = strSpinner.split(" ").filter(x => x !== "")
strSpinner.forEach((char, i) => {
  setTimeout(() => process.stdout.write(`\r${char}  `), i * 250)
});

setTimeout(() => process.stdout.write(`\n`), strSpinner.length * 250)