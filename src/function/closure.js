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

function x1 () {
  for (var i = 1; i <= 5; i++) {
    // 1 2 3 4 5 
    function inner (item) {
      setTimeout(() => {
        console.log(item)
      }, item * 1000)
    }
    // take the iterated value and pass as argument
    inner(i)
  }
  // console.log(i); // 6
}

x1()