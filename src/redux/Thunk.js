// export const fetchPosts = () => async () => {
//   const url = `http://localhost:3030/posts`;

//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };




// export const updatePosts = () => async () => {
//   const url = `http://localhost:3030/posts`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "fake server to build project",
//       author: "Shakhzod Jumaev :)",
//     }),
//   });
//   const data = await response.json();
//   console.log(data);
// };

// export const deletePost = () => async () => {
//   const url = `http://localhost:3030/posts`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "fake server to build project",
//       author: "Shakhzod Jumaev :)",
//     }),
//   });
//   const data = await response.json();
//   console.log(data);
// };
export const logIn = () => async () => {
  const url = `http://localhost:3030/posts`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "fake server to build project",
      author: "Shakhzod Jumaev :)",
    }),
  });
  const data = await response.json();
  console.log(data);
};
