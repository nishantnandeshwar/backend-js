# This is the Backend project based on Javascript
- npm init for setup and initialise the project
- update the script in package.json
- created file structure
- added prettier configuration
- setup the mongodb atlas
- write code for connection to mongodb (db/index.js) also dotenv setup
- added cors and cookie packages and added in app.js
- add some middleware setting using app.use in app.js
- make asyncHandler wrapper in utils
- work on model (added user and video models) and for watchHistory we need <b>(mongoose-aggregate-paginate-v2)</b>package
- install bcrypy and jsonwebtoken packages

- add access_token_secret, access_token_expiry, refresh_token_secret, refresh_token_expiry in .env file
- create own methods for generateAccessToken, generateRefreshToken