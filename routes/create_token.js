var express = require('express');
var router = express.Router();
var twilio = require('twilio');
var util = require('util');

const AccessToken = require('twilio').jwt.AccessToken;
const twilioAccountSid = 'ACa0899a5c95f91514458c1af6f33708c4';
const twilioApiKey = 'SKcee42ff41c96fd8f9d7e26a146a0f122';
const twilioApiSecret = 'iCQKjgfWlWXEi31H7YaCM3SB56WisXv2';
const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);

router.post('/', function(req, res, next) {
	res.writeHead(200, {'content-type': 'text/json' });
	res.end(JSON.stringify({ token : token}) );
});

module.exports = router;
