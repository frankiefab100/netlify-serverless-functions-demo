<div align="center">
 <h1>Netlify Serverless Functions Demo</h1>
 <p>Companion repository for the tutorial demostrating how to hide secret keys using netlify functions in a Frontend application</p>

<p align="center">
<a href="https://github.com/frankiefab100/netlify-serverless-functions-demo/fork" target="blank">
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

4. Run the app on the server
```BASH
netlify dev
```
The project will be ready on localhost:8888 via: `https://localhost:8888/.netlify/functions/getPhotos`


Note: Add your API keys as Environment variable in `.env`: PIXABAY_API_KEY=your-api-key-here

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
