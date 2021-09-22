arg = process.argv.slice(2).filter(x => Number(x) > 0)

console.log(arg)

for (const x of arg) {
  setTimeout(() => {
    console.log(x + ' seconds beep')
    process.stdout.write('\x07');
  }, Number(x) * 1000)
}
