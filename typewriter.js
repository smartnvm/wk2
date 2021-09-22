let sentence = "hello there from lighthouse labs";

//sentence = sentence.split("").reverse().join("")

delayForOf = 000

setTimeout(() => {
  console.log('----------------for of --------------')
}, delayForOf)

for (const char of sentence) {
  //console.log(char);
  setTimeout(() => {
    // print the char here
    process.stdout.write(char)
    //console.log('')
  }, delayForOf) // <= 1s delay to make it noticeable. Can dial it down later

}

setTimeout(() => {
  console.log('')
}, delayForOf)


delayForLoop = 50
setTimeout(() => {
  console.log('----------------for Loop --------------')
}, delayForLoop)


for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(`'${sentence[i]}' => ${i * 50} 'ms'`)
    console.log('')
  }, i * 50 + delayForLoop) // <= 1s delay to make it noticeable. Can dial it down later

}


delayforEach = sentence.length * 50
setTimeout(() => {
  console.log('----------------forEach --------------')
}, delayforEach)


sentence.split("").forEach((char, i) => {
  setTimeout(() => {
    // print the char here
    //    process.stdout.write(`'${char}' ===> ${i * 250} 'ms'`)
    process.stdout.write(char)
    //  console.log('')
  }, i * 100 + delayforEach) // <= 1s delay to make it noticeable. Can dial it down later

});

setTimeout(() => {
  console.log('')
}, delayforEach + 100 *( sentence.length ))

