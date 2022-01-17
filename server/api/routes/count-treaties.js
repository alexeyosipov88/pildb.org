const {getTreatiesAmountByCountry, getTreatiesAmountByTopic} = require("../../helpers/queries")

module.exports = (router) => {
  router.get("/count-treaties", async (req, res) => {
    try {
      const amount = await getTreatiesAmountByCountry();
      res.json(amount);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  router.get("/count-topics", async (req, res) => {
    try {
      const amount = await getTreatiesAmountByTopic();
      res.json(amount);
    } catch (err) {
      console.error(err.message);
    }
  });

};