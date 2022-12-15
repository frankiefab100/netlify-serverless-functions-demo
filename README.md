<div align="center">
 <h1>Netlify Serveless Functions Demo</h1>
 <p>Companion repository for the tutorial demostrating how to hide secret keys using netlify functions in a Frontend application</p>

<p align="center">
<a href="https://github.com/frankiefab100/netlify-serveless-functions-demo/fork" target="blank">
<img src="https://img.shields.io/github/forks/frankiefab100/netlify-serveless-functions-demo?style=flat-square" alt="netlify-serveless-functions-demo forks"/>
</a>
<a href="https://github.com/frankiefab100/netlify-serveless-functions-demo/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/frankiefab100/netlify-serveless-functions-demo?style=flat-square" alt="netlify-serveless-functions-demo stars"/>
</a>
<a href="https://github.com/frankiefab100/netlify-serveless-functions-demo/issues" target="blank">
<img src="https://img.shields.io/github/issues/frankiefab100/netlify-serveless-functions-demo?style=flat-square" alt="netlify-serveless-functions-demo issues"/>
</a>
<a href="https://github.com/frankiefab100/netlify-serveless-functions-demo/blob/main/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/frankiefab100/netlify-serveless-functions-demo?style=flat-square" alt="netlify-serveless-functions-demo licence" />
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
This branch is deploy via: https://testing--netlify-func-demo.netlify.app/.

The final demo app lives in the `main` branch: <https://netlify-func-demo.netlify.app/>


## How to run locally 🚀

1. Clone the repository

```BASH
git clone https://github.com/frankiefab100/netlify-serveless-functions-demo.git
```

2. Change to netlify-serveless-functions-demo directory

```BASH
cd netlify-serveless-functions-demo
```

3. Install dependencies

```BASH
npm install
```

4. Click on `Go Live` to run Live Server
The native/vanilla javascript application should be running on your browser. 

### How To Setup using dotenv (Note: This method doesn't work)
-  Open a terminal and runthe command 
```BASH
npm install dotenv
#OR
yarn add -D dotenv
```
- Create `.env` file and save the API key in it.
- Create `.gitignore` file, add `.node_modules` and `.env` to exlude them from getting pushed to GitHUb.
- Import dotenv configuration as:
 ```JS
 const dotenv = require("dotenv").config()
 ```
- Replace the API keys using Environment variable as:
`process.env.PIXABAY_API_KEY`
 

## License 📜
This project is protected under the [MIT License](./License).

## Deploy
[![netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/frankiefab100/netlify-serveless-functions-demo)

## Relevant Links

- [Netlify Docs](https://docs.netlify.com/functions/overview/)


<hr>
<p align="center">
Built with ❤️
</p>
