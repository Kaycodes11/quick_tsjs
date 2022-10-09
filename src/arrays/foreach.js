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



async function getPostSerialized(array) {
  for (const id of array) {
    const data = await getPost(id);
    console.log("HERE: ", data.id);
  }
  console.log("Waiting");
}

// getPostSerialized(ids)


async function getPostSerializedWithReduce(array) {
  await array.reduce(async (acc, id, index, src) => {
    // wait for the previous acc to resolve 
    await acc;
    // get the next item
    const post = await getPost(id);
    console.log(post.id)
    // using Promise.resolve() or Promise.resolve as acc is same
  }, Promise.resolve())
  console.log("Waiting")
}

getPostSerializedWithReduce(ids)


async function getPostConcurrently(array) {
  const posts = await Promise.allSettled(array.map(async (id) => getPost(id)));
  console.log("posts: ", posts)
  console.log("waiting");
}

//  getPostConcurrently(ids)


function useForeach(ids) {
  ids.forEach(async (id) => {
    // while this works but orders are messed up
    const data = await getPost(id);
    // console.log("HERE: ", data.id);
  });

  console.log("LOGGING");
}

// useForeach(ids)