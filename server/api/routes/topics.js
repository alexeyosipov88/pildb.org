const {getTreatiesByTopic, getTopics} = require("../../helpers/queries")

module.exports = (router) => {
  router.get("/topics/:id", async (req, res) => {
    try {
      const treatiesByTopic = await getTreatiesByTopic(req.params.id);
      res.json(treatiesByTopic);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  router.get("/topics", async (req, res) => {
    try {
      const topics = await getTopics();
      res.json(topics);
    } catch (err) {
      console.error(err.message);
    }
  });

};