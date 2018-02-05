const Config = {
    BASE_URL: "http://localhost:8474",
    GET_PROXIES_URL: "/proxies",
    /*
      GET /proxies - List existing proxies and their toxics
      POST /proxies - Create a new proxy
      POST /populate - Create or replace a list of proxies
      GET /proxies/{proxy} - Show the proxy with all its active toxics
      POST /proxies/{proxy} - Update a proxy's fields
      DELETE /proxies/{proxy} - Delete an existing proxy
      GET /proxies/{proxy}/toxics - List active toxics
      POST /proxies/{proxy}/toxics - Create a new toxic
      GET /proxies/{proxy}/toxics/{toxic} - Get an active toxic's fields
      POST /proxies/{proxy}/toxics/{toxic} - Update an active toxic
      DELETE /proxies/{proxy}/toxics/{toxic} - Remove an active toxic
      POST /reset - Enable all proxies and remove all active toxics
      GET /version - Returns the server version number
    */
  };
  
  export default Config;