const {getParticipationByTreaty, getTreaties, getEnglishText} = require("../../helpers/queries")


module.exports = (router) => {
  router.get("/treaties/:id/eng", async (req, res) => {
    try {
      const treaty = await getEnglishText(req.params.id);
      res.json(treaty);
    } catch (err) {
      console.error(err.message);
    }
  });
  router.get("/treaties/:id", async (req, res) => {
    try {
      const participationByTreaty = await getParticipationByTreaty(req.params.id  );
      res.json(participationByTreaty);
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
