var Bip38 = require('bip38');

var privateKeyWif = '5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR';

var bip38 = new Bip38();
bip38.version = {private: 0x80, public: 0x0};
var enc = bip38.encrypt(privateKeyWif, "super-secret", "1Jq6MksXQVWzrznvZzxkV6oY57oWXD9TXB");
console.log(enc);