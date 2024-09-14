const pool = require("../config/db");

//create
exports.createArticle = (req, res) => {
  const { rangkuman, judul, isi } = req.body;
  pool.query("INSERT INTO article (rangkuman, judul, isi) VALUES ($1, $2, $3) RETURNING *", [rangkuman, judul, isi], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`artikel berhasil ditambah dengan ID: ${results.rows[0].id}`);
  });
};

//read
exports.getArticle = (req, res) => {
  pool.query("SELECT * FROM article", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

//update
exports.updateArticle = (req, res) => {
  const { id } = req.params;
  const { rangkuman, judul, isi } = req.body;
  pool.query("UPDATE article SET rangkuman = $1, judul = $2, isi = $3 WHERE id = $4", [rangkuman, judul, isi, id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`artikel dengan ID:${id} berhasil di update`);
  });
};

//delete
exports.deleteArticle = (req, res) => {
  const { id } = req.params;
  pool.query("DELETE FROM article WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`artikel dengan ID:${id} berhasil di hapus`);
  });
};
