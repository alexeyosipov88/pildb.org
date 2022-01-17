const {getParticipationByTreaty} = require("../../helpers/queries")

module.exports = (router) => {
  router.get("/participation/:id", async (req, res) => {
    try {
      const participationByTreaty = await getParticipationByTreaty(req.params.id);
      res.json(participationByTreaty);
    } catch (err) {
      console.error(err.message);
    }
  });

};