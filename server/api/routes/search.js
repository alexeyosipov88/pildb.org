const { search } = require("../../helpers/search");

module.exports = (router) => {
  router.get("/search/:keyword", async (req, res) => {
    try {
      const keyword = req.params.keyword.toLowerCase();
      let result = await search(keyword); 
      res.json(result);
    } catch (err) {
      console.error(err.message);
    }
  });
};
