// TODO: Pull this variable from process.env.REACT_APP_API (via an .env file)
const API_URL = "http://localhost:8080/api";

/**
 * Service class for interacting with an API, authenticating users against the
 * API, and storing JSON Web Tokens in the browser's localStorage.
 */

class ApiService {
  constructor(api_url) {
    this.api_url = api_url;
  }

  async login(username, password) {
    const res = await this.fetch("/users/authenticate", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    let json = await res.json();
    if (!res.ok) {
      throw Error(json.msg);
    }
    this.setToken(json.token);
    return json;
  }

  loggedIn() {
    // TODO: Check if token is expired using 'jwt-decode'
    // TODO: Install using 'npm install jwt-decode'
    /*
    if (jwtDecode(token).exp < Date.now() / 1000) {
        // Do something to renew token
    }
     */
    return this.getToken() !== null;
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
  }

  fetch(url, options) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (this.loggedIn()) {
      headers["Authorization"] = `Bearer ${this.getToken()}`;
    }

    return fetch(this.api_url + url, {
      headers,
      ...options,
    });
  }
}

// Export a single instance of the class
const apiService = new ApiService(API_URL);

export default apiService;
