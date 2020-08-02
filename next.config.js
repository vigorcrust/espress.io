const path = require("path")
const withSvgr = require("next-svgr")
require("dotenv").config()

module.exports = withSvgr({
  webpack: (config) => {
    config.node = {
      fs: "empty",
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "./components"),
      "@utils": path.resolve(__dirname, "./utils"),
      //"@hooks": path.resolve(__dirname, "./hooks"),
    }

    return config
  },
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
})
