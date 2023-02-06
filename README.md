<div align="center">
 <h1>Netlify Serverless Functions Demo</h1>
 <p>Companion repository for the tutorial demostrating how to hide secret keys using netlify functions in a Frontend application</p>

<p align="center">
<a href="https://github.com/frankiefab100/netlify-serverless-functions-demo/tree/main/fork" target="blank">
<img src="https://img.shields.io/github/forks/frankiefab100/netlify-serverless-functions-demo?style=flat-square" alt="netlify-serverless-functions-demo forks"/>
</a>
<a href="https://github.com/frankiefab100/netlify-serverless-functions-demo/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/frankiefab100/netlify-serverless-functions-demo?style=flat-square" alt="netlify-serverless-functions-demo stars"/>
</a>
<a href="https://github.com/frankiefab100/netlify-serverless-functions-demo/issues" target="blank">
<img src="https://img.shields.io/github/issues/frankiefab100/netlify-serverless-functions-demo?style=flat-square" alt="netlify-serverless-functions-demo issues"/>
</a>
<a href="https://github.com/frankiefab100/netlify-serverless-functions-demo/blob/main/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/frankiefab100/netlify-serverless-functions-demo?style=flat-square" alt="netlify-serverless-functions-demo licence" />
</a>
</p>

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
</p>
</div>

## What do you mean by "Netlify functions" ?
Netlify Functions are files used deploy server-side code as API endpoints without the need of backend.

## Prerequisites

To follow along with this tutorial, basic understanding of RESTful APIs and  `async/await` is required.

## Getting Started
It is recommended to start off from the [testing branch](https://github.com/frankiefab100/netlify-serverless-functions-demo/tree/testing).

The final demo app lives in the `main` branch: <https://netlify-func-demo.netlify.app/>


## How to run locally 🚀

1. Clone the repository

```BASH
git clone https://github.com/frankiefab100/netlify-serverless-functions-demo.git
```

2. Change to netlify-serverless-functions-demo directory

```BASH
cd netlify-serverless-functions-demo
```

3. Install dependencies

```BASH
npm install
```

### How To Setup using Netlify functions (Secured Method)
-  Open a terminal and install Netlify CLI.
```BASH
npm install -g netlify-cli  or netlify-lamdba
#OR
yarn add -D netlify-cli --save-dev or  netlify-lamdba
```
- In the root of the project, create `functions` folder. In this directory, create `getPhotos.js` file.
- Create `netlify.toml` config file.
The `command =npm run build` starts the app once it builds and deploy it.
`functions = "functions"` indicates the getPhotos functions can be found in the `functions` directory.
This can be manually configured from the Netlify Dashhboard, Navigate to `Site settings` > `Functions` and then enter/paste a path to the directory in your repository where the functions are stored. The default directory is YOUR_BASE_DIRECTORY/netlify/functions.

- In `package.json`, add a script: `"dev": "netlify-dev"`. This is used to load the dev server. Then, run the command `netlify dev` to start app on the server.

OR configure a `start` and `build` scripts as `"netlify-lambda serve functions"`and `"netlify-lambda build functions"` respectively.
The project will be ready on localhost:8888 via: `https://localhost:8888/.netlify/functions/getPhotos`

- Deployed site is: `https://netlify-func-demo.netlify.app/.netlify/functions/getPhotos`

- Remove `const apiKey = process.env.PIXABAY_API_KEY` and substitute the apiURL in the `script.js` file with `/.netlify/functions/getPhotos?keyword=${keyword}`

In the Netlify Dashhboard, go to the site tab > Environment varaibles and then configure KEY/VALUE pairs as follows

- PIXABAY_API_KEY=your-api-key

> The KEY name should match the one stated in the script.js

- The fetch request URL will  like:  `https://netlify-func-demo.netlify.app/.netlify/functions/getPhotos?keyword=${any-word-here}`

- Create `.env` file and save the API key in it.
- Create `.gitignore` file, add `.node_modules`,`.env`  and `.netlify` to exlude them from getting pushed to GitHub.

NOTE: the `fetch` method is intended for browser runtime. Therefore, we will install `axios` as `npm install axios / yarn add axios`.
Import as `const axios = require("axios");` in vanilla javascript. For javascript library e.g React, import as `import axios from "axios"`

- Install dotenv as `npm install dotenv / yarn add dotenv`.
- Replace the API keys using Environment variable as:
`process.env.PIXABAY_API_KEY`

## License 📜
This project is protected under the [MIT License](./License).

## Deploy
[![netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/frankiefab100/netlify-serverless-functions-demo)

## Relevant Links

- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Netlify Lambda](https://github.com/netlify/netlify-lambda#usage)
- [Netlify Intro to Serverless Functions](https://www.netlify.com/blog/intro-to-serverless-functions/)
- [Netlify Edge Functions](https://docs.netlify.com/edge-functions/get-started/)


<hr>
<p align="center">
Built with ❤️
</p>
