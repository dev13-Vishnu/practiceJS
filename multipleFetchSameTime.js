const urls =  [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  .then(result => console.log(result))
  .catch(error => console.error("Error:",error));