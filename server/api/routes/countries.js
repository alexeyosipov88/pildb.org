const {getTreatiesByCountry, getCountries} = require("../../helpers/queries")

module.exports = (router) => {
  router.get("/countries/:id", async (req, res) => {
    try {
      const treatiesByCountry = await getTreatiesByCountry(req.params.id);
      res.json(treatiesByCountry);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  router.get("/countries", async (req, res) => {
    try {
      const countriesAll = await getCountries();
      console.log(countriesAll);
      res.json(countriesAll);
    } catch (err) {
      console.error(err.message);
    }
  });

};