const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const { keyword } = event.queryStringParameters;
    let response = await axios.get(
      `${process.env.PIXABAY_API_ENDPOINT}=${process.env.PIXABAY_API_KEY}&q=${keyword}&image_type=photo&safesearch=true&per_page=3`
    );
    let result = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify({
        result,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
