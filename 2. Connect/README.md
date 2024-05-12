# Connecting Frontend and Backend

```
npm init
npm i express
```

create frontend:

```
npm create vite@latest .
or
npm create vite@latest .
```

### Axios: https://www.npmjs.com/package/axios

axios will give some additional features than fetch.
axios library specially writtes to make web request like how data is coming, how data is getting handled, and failed, loading situations, if we want to stop data in between and add something (like adding api keys in between) as axios prodives production level features so its preferable.

```
npm i axios
```

### Run:

```
npm run dev
```

### CORS: Cross origin

https://www.npmjs.com/package/cors

It provides saftey for an application.
server is running in some server/domin/port. if anyone can come and take data so there be number of requests on the server which can make your bill 😶.
if url is different then its Cross origin(port number different).
origin same ---> url should be same, port should be same.
for example in simple words : we can't allow every person in our home yeah! its different for family members for others we need permission to get into home.

one of the solution is: (depending on usecase)we can mark \* so that it will allow all requests from every where (eg: github)

### Proxy: https://vitejs.dev/config/server-options

added proxy in vite.config.js

here '/api/jokes' will append automitically in url while making request from axios. also proxy will be added to the request will be coming from the only url which is mentioned in vite.config.js. Server will think that origin of request is from url mentioned in vite.config.js.
