const {getTreatiesByOrganization, getOrganizations} = require("../../helpers/queries")

module.exports = (router) => {
  router.get("/organizations/:id", async (req, res) => {
    try {
      const treaties = await getTreatiesByOrganization(req.params.id);
      res.json(treaties);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  router.get("/organizations", async (req, res) => {
    try {
      let organizations = await getOrganizations();
      res.json(organizations);
    } catch (err) {
      console.error(err.message);
    }
  });

};