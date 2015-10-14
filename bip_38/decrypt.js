var Bip38 = require('bip38');

var encryptedKey = '6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg';

var bip38 = new Bip38();
var privateKeyWif = bip38.decrypt(encryptedKey, 'TestingOneTwoThree');
console.log(privateKeyWif);