exports.healthz = async (req, res) => {
  res.status(200).send("GNews API works well!");
};
