const {getTreatyByName, getTreaties} = require("../../helpers/queries")


module.exports = (router) => {
  router.get("/treaties/:id", async (req, res) => {
    try {
      const treaty = await getTreatyByName(req.params.id);
      res.json(treaty);
    } catch (err) {
      console.error(err.message);
    }
  });

  router.get("/treaties/", async (req, res) => {
    try {
      const treaties = await getTreaties();
      res.json(treaties);
    } catch (err) {
      console.error(err.message);
    }
  });
};
