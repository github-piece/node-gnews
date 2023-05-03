const axios = require("axios");
const cache = require("memory-cache");

const baseUrl = "https://gnews.io/api/v4";

exports.healthz = async (req, res) => {
  res.status(200).send("GNews API works well!");
};

exports.search = async (req, res) => {
  try {
    if (!process.env.API_KEY)
      return res.status(400).send({
        success: false,
        message: "GNews API Key is not updated or not provided",
      });

    const { query, count } = req.body;
    if (!query)
      return res.status(400).send({
        success: false,
        message: "Please provide a searh text for GNews",
      });

    const cacheKey = req.originalUrl + JSON.stringify(req.body);
    const cachedResponse = cache.get(cacheKey);
    if (cachedResponse) {
      console.log("Returning cached response for", req.body);
      return res.status(200).json(cachedResponse);
    }

    const response = await axios.get(
      `${baseUrl}/search?q=${query}&lang=en&country=us&max=${
        count || 10
      }&apikey=${process.env.API_KEY}`
    );

    const result = { success: true, data: response.data };
    cache.put(cacheKey, result, 60 * 60 * 12 * 1000);
    res.status(200).json(result);
  } catch (err) {
    console.log("Search Error: ", err);
    res.status(400).send({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};
