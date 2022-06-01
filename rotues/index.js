const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<nav> 404 page could not be reached</nav>");
});

module.exports = router;
