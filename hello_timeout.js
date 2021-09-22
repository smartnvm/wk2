

let words = ['4311o', 'th3r3', 'w0r1d']


setTimeout(() => {
  console.log(`${words}`.split(",").join(' '));

}, 3000);



words.forEach((elem, i) =>
  setTimeout(() => {
    console.log(elem);
  }, i * 1000));




// for (i = 0; i < words.length; i++) {
  
//   setTimeout((word) => {
//     x = words[i]
//       console.log(x)
//   }, i * 1000);
// }


