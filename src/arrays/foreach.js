const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// async function asnyco (id = 1) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   console.log(response.json())
//   console.log("logging")

// }

// asnyco()


async function getPost(id = 1) {
  return (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}

async function show  () {
  const result = await getPost(2);
  return result
}
console.log("SHOW:", show())

// handing promise with for await
async function getPostSerialized(array) {
  let result = [];
  for await (const id of array) {
    const data = await getPost(id);
    // console.log("HERE: ", data.title);
    result.push(data);
  }
  // console.log("done");
  return result;
}

getPostSerialized(ids).then((data) => {
  data.forEach((v) => console.info(v.title));
});


// # handing promise with reduce
async function getPostSerializedWithReduce(array) {
  return array.reduce(async (acc, id) => {
    // first, wait for the previous acc to resolve
    const prev = await acc;
    // get the next item
    const post = await getPost(id);
    // console.log(post.id);
    return [...prev, post];

    // using Promise.resolve() or Promise.resolve as acc is same
  }, Promise.resolve([]));
}

getPostSerializedWithReduce(ids).then((result) => {
  console.log(result);
  result.forEach((data) => {
    console.log(data.title);
  });
});


async function getPostConcurrently(array) {
  const posts = await Promise.allSettled(array.map(async (id) => getPost(id)));
  console.log("posts: ", posts)
  console.log("waiting");
}

 getPostConcurrently(ids);

// forEach isn't made to handle async requests mainly as it doesn't resolve the promise from current iteration before moving onto next iteration
// thus ordering of resolved data is messed up

function useForeach(ids) {
  ids.forEach(async (id) => {
    // while this works but orders are messed up
    const data = await getPost(id);
    // console.log("HERE: ", data.id);
  });

  console.log("LOGGING");
}

useForeach(ids);