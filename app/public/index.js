document.addEventListener("DOMContentLoaded", function () {
  const renderPost = (body, post) => {
    const section = document.createElement("section");
    const domString = `
  <p>
    <strong>Post: </strong>${post.title}
  </p>
  <p>
    <strong>Author: </strong>${post.author.firstName}
  </p>
`;
    section.innerHTML = domString;
    body.appendChild(section);
  };

  const promisePosts = fetch("/posts").then((response) => response.json());

  const promiseAuthors = promisePosts.then((posts) => {
    return Promise.all(
      posts.map((post) =>
        fetch(`/author/${post.authorId}`).then((r) => r.json())
      )
    );
  });

  const body = document.body;
  console.log(body);
  Promise.all([promisePosts, promiseAuthors])
    .then(([posts, authors]) => {
      authors.forEach((author, index) => {
        if (posts[index]) {
          const aggregatedPost = { ...posts[index], author };
          renderPost(body, aggregatedPost);
        }
      });
    })
    .catch((e) => console.error(e));
});
