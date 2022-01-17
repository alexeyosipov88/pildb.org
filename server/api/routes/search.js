const { search } = require("../../helpers/search");

module.exports = (router) => {
  router.get("/search/:keyword", async (req, res) => {
    try {
      const keyword = req.params.keyword.toLowerCase();
      let result = await search(keyword);
      // let result = {};
      // const keywordArr = keyword.split(" ");
      // console.log(keywordArr);
      // for (let i = 0; i < keywordArr.length; i++) {
      //   let tmpResult = await search(keywordArr[i]);
      //   console.log(tmpResult.topics);
      //   for (let key in tmpResult) {
      //     result[key] = [];
      //     result[key] = result[key].concat(tmpResult[key]);
      //     console.log("added");
      //   }
      // }

      // if (keywordArr.length > 1 && keywordArr.length < 10) {
      //   console.log(result, 'Resul');
      //   let tmpResult = [];
      //   for (let i = 0; i < keywordArr.length; i++) {
      //     tmpResult = await search(keywordArr[i]);
      //     for(let key in result) {
      //       if(tmpResult[key].length > 0) {
      //         result[key] = result[key].concat(tmpResult[key]);
      //       }
      //     }
      //   }
      // }
      res.json(result);
    } catch (err) {
      console.error(err.message);
    }
  });
};
