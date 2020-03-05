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

router.post('/callTest', function(req, res, next) {
    const accountSid = 'ACa0899a5c95f91514458c1af6f33708c4';
    const authToken = 'a3ad82783120eeaf5d475ae62576f622';
    const client = require('twilio')(accountSid, authToken);
    client.calls
          .create({
             url: 'http://demo.twilio.com/docs/voice.xml',
             to: '+81' + req.body.parameter1,
             from: '+12072557438'
           })
          .then(call => console.log(call.sid));
    });

module.exports = router;
