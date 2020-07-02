Cut The Link [![License](https://img.shields.io/badge/licence-MIT-blue)](https://choosealicense.com/licenses/mit/) [![Status](https://img.shields.io/badge/status-work--in--progress-yellow)](https://github.com/M0ng00se7169/Tetris)
✂️ Cut The Link MERN Application with JWT authentication 
(using MongoDB, Express, React and Node.js) 

<br/>

## How to use it ?
:zero:  If you don't have installed NodeJS and NPM on your PC run this command:

```bash
sudo apt install nodejs
sudo apt install npm
```
or downlad it by using this link: https://nodejs.org/en/download/ <br/>

:one:  Install all `node_modules` <br/>
```bash
npm i
```

:two: Change the proxy in `client/package.json`:
From:
```bash
"proxy": {
    "/*": {
      "target": "http://localhost:5000"
    },
    "/detail/*": {
      "target": "http://localhost:5000"
    },
    "/create/*": {
      "target": "http://localhost:5000"
    }
  }
```
To:
```bash
"proxy": "http://localhost:5000",
```

:three: In `config/` create `development.js`

:four: 
```bash
module.exports = {
  port: 5000,
  jwtSecret: "<random string>", // j938jd3kx9034jd93k
  mongoUri: "" //config got from MongoDB
  baseUrl: "http://localhost:5000"
};
```

:five: Run the app locally:
```bash
npm run dev
```

:six: Enjoy 😉

### TIPS
- If you don't see directories `node_modules` after downloading it, or you have some other problems, try to disable `Windows Defender`, download directory again and repeat steps


### DEPLOYMENT
https://cut-link-app.herokuapp.com/


<br/><br/>
Feel free to contact with me. And hope you enjoy the game 😎