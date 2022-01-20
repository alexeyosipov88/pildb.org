const {getParticipationByTreaty} = require("../../helpers/queries")

module.exports = (router) => {
  router.get("/treaties/:id", async (req, res) => {
    try {
      console.log(req.params.id)
      const participationByTreaty = await getParticipationByTreaty(req.params.id  );
      res.json(participationByTreaty);
    } catch (err) {
      console.error(err.message);
    }
  });

};