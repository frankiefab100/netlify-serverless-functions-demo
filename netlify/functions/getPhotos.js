import { PIXABAY_API_KEY } from "./config.js";

require("dotenv").config();
const axios = require("axios");

// const process = require("process");
// const { PIXABAY_API_KEY } = process.env;

exports.handler = async (event, context) => {
  try {
    const { keyword } = event.queryStringParameters;
    let response = await axios.get(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${keyword}&image_type=photo&safesearch=true&per_page=3`,
      {
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
        params: { trophies: true },
      }
    );

    let imageURL = response.data.hits;

    return {
      statusCode: 200,
      body: JSON.stringify({ imageURL }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};
