# Chai-Backend

## Set-up Required:

1. Node Installation: https://nodejs.org/en

   Install Node in Kali Linux: NVM setup---> https://letscodepare.com/blog/how-to-install-nvm-node-version-manager-on-linux

2. Initializing an Application from node package manager: this will generate package.json file

```
$npm init (or)
$npm init -y (will make default selections automitically)
```

3. Run Js file ex: index.js

```
package.json
"start": "node index.js"

Run command
$npm run start
or
$node index.js
```

4. Install Express: https://expressjs.com/

```
$ npm install express
```

5. DOTENV: https://www.npmjs.com/package/dotenv
   to store sensitive information such as database name, password etc.

```
npm install dotenv
```

npm start will run "node index.js" command which we added it in package.json

## Basics:

1. / :means home route
2. main functionality of express is to listen communication between computer and server(routes like /, /login)

```mermaid
      graph LR;
    A[Computer] --> B[Server];
    B --> A;
```

3. Bundlers: bundles all files and converts into such a way that browser can understand(i.e html,css,js)

Proxy: vite.config.js

here '/api/jokes' will append automitically in url while making request from axios. also proxy will be added to the request will be coming from the only url which is mentioned in vite.config.js. Server will think that origin of request is from url mentioned in vite.config.js.
