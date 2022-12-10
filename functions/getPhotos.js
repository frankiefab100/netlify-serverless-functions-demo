require("dotenv").config();
const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const { keyword } = event.queryStringParameters;
    let response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${keyword}&image_type=photo&safesearch=true&per_page=3`,
      {
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
        params: { trophies: true },
      }
    );

    let imageURL = response.data;
    // let imageURL = response.data.hits.forEach((result) => {
    //   result.webformatURL;
    // });

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

// exports.handler = (event, context, callback) => {
//   const token = process.env.process.env.PIXABAY_API_KEY;

//   const { keyword } = event.queryStringParameters;

//   axios
//     .get(
//       `https://pixabay.com/api/?key=${token}&q=${keyword}&image_type=photo&safesearch=true&per_page=3`
//     )
//     .then(({ data: { data: imageURL } }) => {
//       callback(null, {
//         statusCode: 200,
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(
//           imageURL.map((id) => ({
//             images: id.images,
//           }))
//         ),
//       });
//     })
//     .catch((e) => {
//       callback(e);
//     });
// };
