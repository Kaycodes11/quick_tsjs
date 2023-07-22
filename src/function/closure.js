function args () {
  console.log(arguments); // {0: "Hello", 1: "Javascript"}
  console.log(Array.from(arguments)); // ["Hello", "Javascript"]
}
args("Hello", "Javascript")


// function close (item) {
//   setTimeout(() => {
//     console.log(item);
//   }, item * 1000)
// }


// function x () {
//   for (var i = 1; i <= 5; i++) {
//     close(i)
//   }
// }

// x()