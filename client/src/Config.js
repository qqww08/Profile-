export const BACK_SERVER_URL = "https://sdhportfolio.site:8443";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

const token = localStorage.getItem("x_token");

// If token, add to headers
if (token) {
  config.headers["x_token"] = token;
}

config.headers["Content"] = "application/json;charset=UTF-8";

export const headersConfig = config;
