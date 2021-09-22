process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = () => {
  let key = 'a'
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 700);

  setTimeout(() => {
    process.stdout.write('\r\|   ');
  }, 900);


  setTimeout(() => {
    process.stdout.write('\r\/   ');
  }, 1100);

  setTimeout(() => {
    process.stdout.write('\r\-   ');
  }, 1100);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 1300);


  setTimeout(() => {
    process.stdout.write('\r\|   ');
    key = 'b'
  }, 1500);


}


return key

x = spinner()


setTimeout(() => {
  console.log(x)
  process.stdout.write('\n');
  console.log(x)

}, 1800);

