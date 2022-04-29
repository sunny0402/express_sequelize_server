// /authors
// [{"id":1,"firstName":"Adeline","lastName":"Schuppe",
// "createdAt":"2022-04-29T02:00:34.000Z","updatedAt":"2022-04-29T02:00:34.000Z"},
// {"id":2,"firstName":"Victor","lastName":"Mraz","createdAt":"2022-04-29T02:00:34.000Z",
// "updatedAt":"2022-04-29T02:00:34.000Z"}]

document.addEventListener("DOMContentLoaded", async function () {
  const renderAuthor = (body, an_author) => {
    const section = document.createElement("section");
    const content = `
    <section class="authors-section">
    <h3>
   First Name: ${an_author.firstName} | Last Name: ${an_author.lastName}
    </h3>
    <ul class="author-list">
        <li>${an_author.id}</li>
        <li>createdAt: ${an_author.createdAt}</li>
        <li>updatedAt: ${an_author.updatedAt}</li>
    <ul>
    </section>
    `;
    section.innerHTML = content;
    body.appendChild(section);
  };

  const response = await fetch("/api/authors");
  const all_authors = await response.json();
  console.log(typeof all_authors);

  const dom_body = document.body;
  all_authors.forEach((author) => {
    renderAuthor(dom_body, author);
  });
});
