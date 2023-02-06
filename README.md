<div align="center">
 <h1>Netlify Serverless Functions Demo</h1>
 <p>Companion repository for the tutorial demostrating how to hide secret keys using netlify functions in a Frontend application</p>

<p align="center">
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

1. Clone the `testing` branch project repository

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

4. Update `netlify.toml` file with the following commands:
```BASH
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = "dist" 
 ```

5. Rename `.en.example` to `.env`
```BASH
Replace your API key in the file
 ```

## License 📜
This project is protected under the [MIT License](./License).

<hr>
<p align="center">
Built with ❤️
</p>
