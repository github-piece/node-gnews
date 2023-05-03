exports.healthz = async (req, res) => {
  res.status(200).send("Phyllo Route works well!");
};

exports.getTokens = async (req, res) => {
  try {
    res.status(200).send({ success: true });
  } catch (err) {
    console.log("Get Token Error: ", err);
    res.status(400).send({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};
