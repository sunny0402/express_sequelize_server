module.exports = (app, db) => {
  app.get("/api/authors", (req, res) =>
    db.author.findAll().then((result) => res.json(result))
  );
  app.get("/author/:id", (req, res) =>
    db.author.findByPk(req.params.id).then((result) => res.json(result))
  );
};
