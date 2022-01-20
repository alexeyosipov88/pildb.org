const {getTreatyByName, getTreaties, getEnglishText} = require("../../helpers/queries")


module.exports = (router) => {
  router.get("/treaties/:id/eng", async (req, res) => {
    try {
      const treaty = await getEnglishText(req.params.id);
      console.log(treaty);
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
