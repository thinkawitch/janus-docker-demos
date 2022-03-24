## Docker for Janus Gateway with demo apps

### Setup
1. ```$ cp .env.dist .env```
2. Make changes in `.env` according to your environment
3. Place your ssl certificates to `docker-containers/ssl-certs/` and set their names in config files
4. ```$ git clone git@github.com:meetecho/janus-gateway.git```
5. ```$ docker-compose up```


### Usage
1. Open demo app in browser `ie. https://WEB_DOMAIN/echotest.html`
2. Set `server` var to use websockets in console
3. Start the demo

`server = "wss://" + window.location.hostname + ":8989";`


### Files

- `./docker-containers/` - config files for janus and nginx 
- `./docker-logs/` - log files from inside of docker 
- `./janus-gateway/` - original janus repo with demo apps
