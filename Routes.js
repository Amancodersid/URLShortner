const express = require('express');
const { createShortUrl, redirect } = require('./Controllers/urlController');
const routes=express.Router();

routes.post('/CreateShort',createShortUrl)
routes.get('/:shortUrl',redirect)




module.exports={routes}